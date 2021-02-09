// Project Type
// We want to be able to instantiate later so will use a Class instead of an Interface
enum ProjectStatus {
    Active,
    Finished
}
class Project {
    constructor(public id: string, 
                public title: string, 
                public description: string, 
                public people: number, 
                public status: ProjectStatus) {
        
    }
}

// Project State Management
type Listener<T> = ( items: T[] ) => void;       // Define our Listerner type to take an array of proj's return void

// First creating an abstract base-state class
class State<T> {
    protected listeners: Listener<T>[] = [];

    addListener(listenerFn: Listener<T>) {         // We'll use this to push new listerner functions into our listerner array. 
        this.listeners.push(listenerFn);        // Ulitmately will allow 'subscription' to state changes.
    } 
}

class ProjectState extends State<Project> {
    private projects: Project[] = [];
    private static instance: ProjectState;

    private constructor() {
        super();
        // Create Singleton of this class
        // By creating a Singleton, we're making sure
        // that wherever in our code we want to access the state
        // We will be getting the exact same object.
    }

    static getInstance() {
        if (this.instance) {        // Check for singleton existence, return it if it's already existing
            return this.instance;
        }
        this.instance = new ProjectState();
        return this.instance;
    }

   

    addProject(title: string, description: string, numOfPeople: number) {
        const newProject = new Project(
            Math.random().toString(), 
            title, 
            description, 
            numOfPeople, 
            ProjectStatus.Active
            );
        this.projects.push(newProject);
        for (const listenerFn of this.listeners) {  // Loop through available listerner functions
            listenerFn(this.projects.slice());      // slice() to ensure original array state is not mutated, only a copy-array is returned.
        }                                           // This is the 'subscription'. All listerner functions get a brand new copy of the new state (project).
    }
}

const projectState = ProjectState.getInstance();        // This lives in the global state now so can be called from anywhere

// Validation
interface Validateable {
    value: string | number;
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    min?: number;
    max?: number;
}

function validate(validateableInput: Validateable) {
    let isValid = true;
    if (validateableInput.required) {
        isValid = isValid && validateableInput.value.toString().trim().length !== 0;
    }
    if (validateableInput.minLength != null && typeof validateableInput.value === 'string') {
        isValid = isValid && validateableInput.value.length >= validateableInput.minLength;
    }
    if (validateableInput.maxLength != null && typeof validateableInput.value === 'string') {
        isValid = isValid && validateableInput.value.length <= validateableInput.maxLength;
    }
    if (validateableInput.min != null && typeof validateableInput.value === 'number') {
        isValid = isValid && validateableInput.value >= validateableInput.min;
    }
    if (validateableInput.max != null && typeof validateableInput.value === 'number') {
        isValid = isValid && validateableInput.value <= validateableInput.max;
    }
    return isValid;
}

// Generic - Component Base Class
// ** This class is going to be an abstract class for UI rendering. Trying to make it as flexible as possible to 
// ** extend our other classes which will implement their own detail as to specific config and rendering. 
// ** We're using abstract parameters T and U to be flexible to the implementing class as to which specific HTML Element
// ** that they need to use in their specific cases
abstract class Component<T extends HTMLElement, U extends HTMLElement> {

    templateElement: HTMLTemplateElement;
    hostElement: T;
    element: U;

    constructor (
        templateId: string, 
        hostElementId: string, 
        insertAtStart: boolean,
        newElementId?: string,
        ) {
        this.templateElement = document.getElementById(templateId)! as HTMLTemplateElement;
        this.hostElement = document.getElementById(hostElementId)! as T;

        const importedNode = document.importNode(
            this.templateElement.content,
            true
        );
        this.element = importedNode.firstElementChild as U;
        if (newElementId) {
            this.element.id = newElementId;
        }
        this.attach(insertAtStart);
    }
    private attach(insertAtStart: boolean) {
        this.hostElement.insertAdjacentElement(
            insertAtStart ? 'afterbegin' : 'beforeend', 
            this.element);
    }
    abstract configure(): void;
    abstract renderContent(): void;

}

// ProjectInput Class

class ProjectInput extends Component<HTMLDivElement, HTMLFormElement> {

    titleInputElement: HTMLInputElement;
    descriptionInputElement: HTMLInputElement;
    peopleInputElement: HTMLInputElement;

    constructor() {
        super('project-input', 'app', true, 'user-input')

        this.titleInputElement = this.element.querySelector('#title') as HTMLInputElement;  
        this.descriptionInputElement = this.element.querySelector('#description') as HTMLInputElement;
        this.peopleInputElement = this.element.querySelector('#people') as HTMLInputElement;
       
        this.configure();
        
    }

    // Convention has public methods at top               // You must bind the instance of 'this' being passed to the event handler
    configure() {                                        // Otherwise 'this' will point to the event instead of the Class / properties
        this.element.addEventListener('submit', this.submitHandler.bind(this))  
    }                                                                           
                                                                                            
    renderContent() {
        //...
    }

    private gatherUserInput(): [string, string, number] | void {
        const enteredTitle = this.titleInputElement.value;
        const enteredDescription = this.descriptionInputElement.value;
        const enteredPeople = this.peopleInputElement.value;

        const titleValidateable: Validateable = {
            value: enteredTitle,
            required: true
        };
        const descValidateable: Validateable = {
            value: enteredDescription,
            required: true,
            minLength: 5
        };
        const peopleValidateable: Validateable = {
            value: +enteredPeople,
            required: true,
            min: 1,
            max: 5
        };

        if (
            !validate(titleValidateable) ||
            !validate(descValidateable) ||
            !validate(peopleValidateable)
        ) {
            alert('Incorrect input format, please try again');
            return;
        } else {
            return [enteredTitle, enteredDescription, +enteredPeople];
        }
    }

    private clearInputs() {
        this.titleInputElement.value = '';
        this.descriptionInputElement.value = '';
        this.peopleInputElement.value = '';
    }

    private submitHandler(event: Event) {
        event.preventDefault();
        const userInput = this.gatherUserInput();
        if (Array.isArray(userInput)) {
            const [title, desc, people] = userInput;            // Destructure Project fields
            projectState.addProject(title, desc, people);       // Push new project (state) onto our state management class 
            this.clearInputs();
        }
    }  
}

// ProjectList Class

class ProjectList extends Component<HTMLDivElement, HTMLElement> {
    assignedProjects: Project[];

    constructor(private type: 'active' | 'finished') {

        super('project-list', 'app', false, `${type}-projects`)

        this.assignedProjects = [];
        
        this.configure();
        this.renderContent();
    }

    configure() {                                                   // BEFORE We attach render elements to DOM of NEW projects (new state) (but after initial render), we want to send a listener function (anonymous here) to our ProjectState
        projectState.addListener((projects: Project[]) => {          // Singleton state-management Class's listener function array (property). This is how you 'subscribe' to state changes sans-redux in a vanilla App.
            const relevantProjects = projects.filter(projs => {
                if (this.type === 'active') {
                   return projs.status === ProjectStatus.Active;    // If the Projects type is active
                }
                return projs.status === ProjectStatus.Finished;
            })
            this.assignedProjects = relevantProjects;
            this.renderProjects();
        });                              
    }

    renderContent() {
        const listId = `${this.type}-projects-list`                         // In case we want to access the individual list items later
        this.element.querySelector('ul')!.id = listId;
        this.element.querySelector('h2')!.textContent = this.type.toUpperCase() + ' PROJECTS';    // This will take the value off our constructor type param
    }

    private renderProjects() {
        const listEl = document.getElementById(`${this.type}-projects-list`)! as HTMLUListElement;
        listEl.innerHTML = '';                              // setting the UL to empty string as quick-fix to double-rendering.
        for (const prjItem of this.assignedProjects) {
            const listItem = document.createElement('li');
            listItem.textContent = prjItem.title;
            listEl.appendChild(listItem);
        }
    }
}

const projInput = new ProjectInput();
const activePrjList = new ProjectList('active');
const finishedPrjList = new ProjectList('finished');
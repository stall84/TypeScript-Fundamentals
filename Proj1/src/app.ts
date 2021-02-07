// Project State Management

class ProjectState {
    private listeners: any[] = [];
    private projects: any[] = [];
    private static instance: ProjectState;

    private constructor() {
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

    addListener(listenerFn: Function) {         // We'll use this to push new listerner functions into our listerner array. 
        this.listeners.push(listenerFn);        // Ulitmately will allow 'subscription' to state changes.
    }

    addProject(title: string, description: string, numOfPeople: number) {
        const newProject = {
            id: Math.random().toString(),   // Note this isn't a production solution as you can get the same value more than once.
            title: title,
            description: description,
            people: numOfPeople
        };
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

// ProjectInput Class

class ProjectInput {

    templateElement: HTMLTemplateElement;
    hostElement: HTMLDivElement;
    element: HTMLFormElement;
    titleInputElement: HTMLInputElement;
    descriptionInputElement: HTMLInputElement;
    peopleInputElement: HTMLInputElement;

    constructor() {
        this.templateElement = document.getElementById('project-input')! as HTMLTemplateElement;
        this.hostElement = document.getElementById('app')! as HTMLDivElement;

        const importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild as HTMLFormElement;
        this.element.id = 'user-input';

        this.titleInputElement = this.element.querySelector('#title') as HTMLInputElement;
        this.descriptionInputElement = this.element.querySelector('#description') as HTMLInputElement;
        this.peopleInputElement = this.element.querySelector('#people') as HTMLInputElement;

        this.configure();
        this.attach();
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

    private configure() {
        this.element.addEventListener('submit', this.submitHandler.bind(this))  // You must bind the instance of 'this' being passed to the event handler
    }                                                                           // Otherwise 'this' will point to the event instead of the Class / properties

    private attach() {
        this.hostElement.insertAdjacentElement('afterbegin', this.element);
    }

}

// ProjectList Class

class ProjectList {
    templateElement: HTMLTemplateElement;
    hostElement: HTMLDivElement;
    element: HTMLElement;
    assignedProjects: any[];

    constructor(private type: 'active' | 'finished') {
        this.templateElement = document.getElementById('project-list')! as HTMLTemplateElement;
        this.hostElement = document.getElementById('app')! as HTMLDivElement;
        this.assignedProjects = [];

        const importedNode = document.importNode(
            this.templateElement.content,
            true
        );
        this.element = importedNode.firstElementChild as HTMLElement;
        this.element.id = `${this.type}-projects`;
        
                                                            // BEFORE We attach render elements to DOM of NEW projects (new state) (but after initial render), we want to send a listener function (anonymous here) to our ProjectState
        projectState.addListener((projects: any[]) => {    // Singleton state-management Class's listener function array (property). This is how you 'subscribe' to state changes sans-redux in a vanilla App.
            this.assignedProjects = projects;
            this.renderProjects();
        });                              
                                        


        this.attach();  // Attach to DOM
        this.renderContent();
    }

    private renderProjects() {
        const listEl = document.getElementById(`${this.type}-projects-list`)! as HTMLUListElement;
        for (const prjItem of this.assignedProjects) {
            const listItem = document.createElement('li');
            listItem.textContent = prjItem.title;
            listEl.appendChild(listItem);
        }
    }

    private renderContent() {
        const listId = `${this.type}-projects-list`                         // In case we want to access the individual list items later
        this.element.querySelector('ul')!.id = listId;
        this.element.querySelector('h2')!.textContent = this.type.toUpperCase() + ' PROJECTS';    // This will take the value off our constructor type param
    }

    private attach() {  // Attach to DOM method
        this.hostElement.insertAdjacentElement('beforeend', this.element);
    }
}

const projInput = new ProjectInput();
const activePrjList = new ProjectList('active');
const finishedPrjList = new ProjectList('finished');
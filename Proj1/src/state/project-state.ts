import { Project, ProjectStatus } from "../models/project";

// Project State Management
type Listener<T> = (items: T[]) => void; // Define our Listerner type to take an array of proj's return void

// First creating an abstract base-state class

class State<T> {
  protected listeners: Listener<T>[] = [];

  addListener(listenerFn: Listener<T>) {
    // We'll use this to push new listerner functions into our listerner array.
    this.listeners.push(listenerFn); // Ulitmately will allow 'subscription' to state changes.
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
    if (this.instance) {
      // Check for singleton existence, return it if it's already existing
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
    this.updateListeners();
  }

  moveProject(projectId: string, newStatus: ProjectStatus) {
    const project = this.projects.find((prj) => prj.id === projectId);
    if (project && project.status !== newStatus) {
      project.status = newStatus;
      this.updateListeners();
    }
  }

  private updateListeners() {
    for (const listenerFn of this.listeners) {
      // Loop through available listerner functions
      listenerFn(this.projects.slice()); // slice() to ensure original array state is not mutated, only a copy-array is returned.
    } // This is the 'subscription'. All listerner functions get a brand new copy of the new state (project).
  }
}

export const projectState = ProjectState.getInstance(); // This lives in the global state now so can be called from anywhere

import { Component } from "./base-component";
import { Validateable, validate } from "../util/validation";
import { autobind } from "../decorators/autobind";
import { projectState } from "../state/project-state";

// ProjectInput Class

export class ProjectInput extends Component<HTMLDivElement, HTMLFormElement> {
  titleInputElement: HTMLInputElement;
  descriptionInputElement: HTMLInputElement;
  peopleInputElement: HTMLInputElement;

  constructor() {
    super("project-input", "app", true, "user-input");

    this.titleInputElement = this.element.querySelector(
      "#title"
    ) as HTMLInputElement;
    this.descriptionInputElement = this.element.querySelector(
      "#description"
    ) as HTMLInputElement;
    this.peopleInputElement = this.element.querySelector(
      "#people"
    ) as HTMLInputElement;

    this.configure();
  }

  // Convention has public methods at top               // You must bind the instance of 'this' being passed to the event handler
  configure() {
    // Otherwise 'this' will point to the event instead of the Class / properties
    this.element.addEventListener("submit", this.submitHandler);
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
      required: true,
    };
    const descValidateable: Validateable = {
      value: enteredDescription,
      required: true,
      minLength: 5,
    };
    const peopleValidateable: Validateable = {
      value: +enteredPeople,
      required: true,
      min: 1,
      max: 5,
    };

    if (
      !validate(titleValidateable) ||
      !validate(descValidateable) ||
      !validate(peopleValidateable)
    ) {
      alert("Incorrect input format, please try again");
      return;
    } else {
      return [enteredTitle, enteredDescription, +enteredPeople];
    }
  }

  private clearInputs() {
    this.titleInputElement.value = "";
    this.descriptionInputElement.value = "";
    this.peopleInputElement.value = "";
  }

  @autobind
  private submitHandler(event: Event) {
    event.preventDefault();
    const userInput = this.gatherUserInput();
    if (Array.isArray(userInput)) {
      const [title, desc, people] = userInput; // Destructure Project fields
      projectState.addProject(title, desc, people); // Push new project (state) onto our state management class
      this.clearInputs();
    }
  }
}

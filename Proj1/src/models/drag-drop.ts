// Drag & Drop Interfaces

export interface Draggable {
  dragStartHandler(event: DragEvent): void;
  dragEndHandler(event: DragEvent): void;
}
export interface DragTarget {
  dragOverHandler(event: DragEvent): void;
  dropHandler(event: DragEvent): void;
  dragLeaveHandler(event: DragEvent): void; // If user aborts the drag, or drags over a non-dropable area
}

// To implement dynamic draggability in a Vanilla JS app like this
// You'll have to create event listeners. Usually one listener that
// will listen for the start of the drag event, and a 2nd that listens
// for the end of the drag event.

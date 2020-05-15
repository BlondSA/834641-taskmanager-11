import AbstractComponent from "./abstract-component.js";

const METHOD_NOT_INPLEMENTED_RECOVERYLISTENERS = `Abstract method not implemented: recoveryListeners`;

export default class AbstractSmartComponent extends AbstractComponent {
  recoveryListeners() {
    throw new Error(METHOD_NOT_INPLEMENTED_RECOVERYLISTENERS);
  }

  rerender() {
    const oldElement = this.getElement();
    const parent = oldElement.parentElement;

    this.removeElement();

    const newElement = this.getElement();

    parent.replaceChild(newElement, oldElement);

    this.recoveryListeners();
  }
}

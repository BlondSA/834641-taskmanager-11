import {createElement} from "../utils/render.js";

const METHOD_NOT_INPLEMENTED_GETTEMPLATE = `Abstract method not implemented: getTemplate`;

export default class AbstractComponent {
  constructor() {
    if (new.target === AbstractComponent) {
      throw new Error(
          METHOD_NOT_INPLEMENTED_GETTEMPLATE
      );
    }
    this._element = null;
  }

  getTemplate() {
    throw new Error(METHOD_NOT_INPLEMENTED_GETTEMPLATE);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}

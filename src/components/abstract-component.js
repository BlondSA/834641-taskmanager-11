import {createElement} from "../utils/render.js";

const ONLY_ONE_INSTANCE = `Abstract method not implemented: getTemplate`;
const METHOD_NOT_INPLEMENTED = `Abstract method not implemented: getTemplate`;
export default class AbstractComponent {
  constructor() {
    if (new.target === AbstractComponent) {
      throw new Error(
          ONLY_ONE_INSTANCE
      );
    }
    this._element = null;
  }

  getTemplate() {
    throw new Error(METHOD_NOT_INPLEMENTED);
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

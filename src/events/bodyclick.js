import { CustomEvent } from 'kapla';

/**
 * Window resize custom event
 *
 * Call `onResize` with following params:
 *    - {number} width
 *    - {number} height
 *    - {number} ratio (width / heigth)
 *
 * @class MyEvent
 * @extends {CustomEvent}
 */
class MyEvent extends CustomEvent {
  constructor(...args) {
    super(...args);

    this.scope = 'global';
    this.log = false;
  }

  bind(component, ee) {
    console.log('bind bodyclick event');
    const { element } = component.context;

    this.eventByElement.set(element, this.callback(component, ee));
    document.addEventListener('click', this.eventByElement.get(element))
  }

  unbind(component) {
    console.log('unbind bodyclick event');
    const { element } = component.context;

    document.removeEventListener('click', this.eventByElement.get(element));
  }

  callback(component, ee) { // eslint-disable-line class-methods-use-this
    return function callback() {
      component.onBodyclick();
    };
  }
}

export const bodyclick = new MyEvent('bodyclick');

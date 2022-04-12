import { CustomEvent } from 'kapla';

class MyEvent extends CustomEvent {
  constructor(...args) {
    super(...args);

    this.scope = 'global';
    this.log = false;
  }

  bind(component, ee) {
    console.log('bind resize event');

    const { element } = component.context;

    this.eventByElement.set(element, this.callback(component, ee));
    window.addEventListener('resize', this.eventByElement.get(element));
  }

  unbind(component) {
    console.log('unbind resize event');

    const { element } = component.context;

    window.removeEventListener('resize', this.eventByElement.get(element));
  }

  callback(component, ee) { // eslint-disable-line class-methods-use-this
    return function callback() {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const ratio = width / height;

      ee.emit('resize', width, height, ratio);
      component.onResize(width, height, ratio);
    };
  }
}

export const resize = new MyEvent('resize');

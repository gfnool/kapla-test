import { CustomEvent } from 'kapla';

class MyEvent extends CustomEvent {
  constructor(...args) {
    super(...args);

    this.scope = 'global';
    this.log = false;
  }

  bind(component, ee) {
    console.log('bind raf event');

    const { element } = component.context;

    this.ee = ee;
    this.eventByElement.set(element, this.callback(component));


    this.ee.on('raf', this.eventByElement.get(element));
    this.onTick = this.onTick.bind(this);
    this.time = window.performance.now();
    this.raf = window.requestAnimationFrame(this.onTick);
  }

  unbind(component, ee) {
    console.log('unbind raf event');

    ee.off('raf', this.eventByElement.get(component.context.element));
    window.cancelAnimationFrame(this.raf);
  }

  onTick(now) {
    this.time = now;
    this.delta = (now - this.oldTime) / 1000;
    this.oldTime = now;
    this.ee.emit('raf', this.delta, now);
    this.raf = window.requestAnimationFrame(this.onTick);
  }

  callback(component) { // eslint-disable-line class-methods-use-this
    return function callback(delta, now) {
      component.onRaf(delta, now);
    };
  }
}

export const raf = new MyEvent('raf');

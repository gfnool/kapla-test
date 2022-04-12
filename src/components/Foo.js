import { Component } from 'kapla';

export default class extends Component {
  load() {
    this.name = 'Foo';
    console.log(`load ${this.name}`);
  }

  onRaf() {
    console.log(`onRaf ${this.name}`);
  }

  onResize() {
    console.log(`onResize ${this.name}`);
  }

  destroy () {
    console.log(`destroy ${this.name}`);
  }
}

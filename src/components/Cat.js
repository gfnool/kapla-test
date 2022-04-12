import { Component } from 'kapla';

export default class extends Component {
  load() {
    this.name = 'Cat';
    console.log(`load ${this.name}`);
  }

  onBodyclick() {
    console.log(`Bodyclick listen from ${this.name}`);
  }

  destroy () {
    console.log(`destroy ${this.name}`);
  }
}

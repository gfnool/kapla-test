import { Component } from 'kapla';

export default class extends Component {
  onClick() {
    const name = this.$el.dataset.name;
    [...document.querySelectorAll(`[data-component="${name}"]`)].forEach(el => el.remove())
  }
}

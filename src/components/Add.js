import { Component } from 'kapla';

export default class extends Component {
  onClick() {
    const name = this.$el.dataset.name;
    const html = `<h1 data-component="${name}">${name}</h1>`;
    document.querySelector('body').insertAdjacentHTML('beforeend', html);
  }
}

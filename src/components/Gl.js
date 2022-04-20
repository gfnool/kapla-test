import { Component } from 'kapla';
import Renderer from '../gl/renderer';

export default class extends Component {
  init() {
    console.log('init GL');
    console.log(Renderer);
  }
}

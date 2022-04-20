import { Application } from 'kapla'

class App {
  constructor() {
    return Application.start(document.body);
  }
}

const instance = new App();

export default instance;

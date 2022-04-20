import { mixNoComponent } from 'kapla'
import { WebGLRenderer } from 'three'
import app from '../app'

class Renderer extends mixNoComponent(WebGLRenderer) {
  init() {
    console.log('init Renderer');
  }
}

export default app.init('renderer', Renderer);

import { mixNoComponent } from 'kapla'
import { WebGLRenderer } from 'three'
import app from '../app'

class WebGLRendererWrapper extends WebGLRenderer {
}

class Renderer extends mixNoComponent(WebGLRendererWrapper) {
  init() {
    console.log('init Renderer');
  }
}

export default app.init('renderer', Renderer);

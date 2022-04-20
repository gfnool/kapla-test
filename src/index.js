import { autoLoad } from 'kapla'
import kapla from './app'

const context = require.context('./components', true, /\.js$/)

kapla.load(autoLoad(context))


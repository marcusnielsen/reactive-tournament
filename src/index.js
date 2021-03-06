import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './app'
import Provider from './components/provider'
// import {view as Title} from './components/title-view'

const provider = Provider({localStorage: window.localStorage})
const app = App({provider})
const {view: View} = app
ReactDOM.render(
  <div>
    { /* <Title text={'title text'} /> */ }
    <View />
  </div>, document.getElementById('root'))
window.app = app
window.provider = provider

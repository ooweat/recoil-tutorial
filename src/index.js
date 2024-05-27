import React from 'react'
import {createRoot} from 'react-dom/client'
import {RecoilRoot} from 'recoil'
import App from './App'
import 'todomvc-app-css/index.css'

const root = createRoot(document.getElementById('root'))
root.render(
    <RecoilRoot>
      <App/>
    </RecoilRoot>
)

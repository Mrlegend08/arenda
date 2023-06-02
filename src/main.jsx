import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Root from './Root'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from './context/SearchResult'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider>
      <Root />
    </Provider>
  </BrowserRouter>,
)

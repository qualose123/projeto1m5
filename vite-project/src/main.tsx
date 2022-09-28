import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Mock from './mock'
import GlobalStyle from './assets/GlobalStyle'
import {RouterProvider} from 'react-router-dom'
import Router from './routers';
new Mock();
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={Router}/>
    <GlobalStyle />
  </React.StrictMode>
)

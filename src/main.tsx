/*
 * @Author: hekun
 * @LastEdit: hekun
 * @Descripttion:
 * @params:
 * @Date: 2022-08-24 15:51:27
 * @LastEditTime: 2022-12-20 10:25:52
 */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'styles/index.css'




ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

postMessage({ payload: 'removeLoading' }, '*')

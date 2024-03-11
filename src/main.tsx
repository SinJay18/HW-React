import React from 'react'
import ReactDOM from 'react-dom/client'
import Title from './App.tsx'
import Burger from './Burger.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Title />
    <Burger />
  </React.StrictMode>
)

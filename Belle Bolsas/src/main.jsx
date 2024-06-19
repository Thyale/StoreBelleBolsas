import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import Header from './Header/Header'
import Corpo from './Main/Corpo'
import Footer from './Footer/Footer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Corpo/>
    <Footer/>
  </React.StrictMode>,
)

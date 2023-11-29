import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Router, Routes, Route, BrowserRouter} from "react-router-dom"
import HomePage from './components/HomePage/HomePage'
import NotesPage from './components/NotesPage/NotesPage'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/notes" element={<NotesPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App

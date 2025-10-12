import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../shared/Navbar'
import Footer from '../shared/Footer'
import TopBar from '../shared/TopBar'

export default function MainLayouts() {
  return (
    <div>

      <TopBar></TopBar>

      <nav>
        <Navbar></Navbar>
      </nav>
      <main  >
        <Outlet></Outlet>
      </main>

      <footer>
        <Footer></Footer>
      </footer>

    </div>
  )
}

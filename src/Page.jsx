import React, { useContext } from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import MovieList from "./cine/MovieList"
import Footer from './components/Footer'
import { ThemeContext } from './context'

const Page = () => {
  const {darkMode}=useContext(ThemeContext)

  return (
    <div className={`h-full w-full ${darkMode? "dark":""}`}>
      <Header />
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <Sidebar />
          <MovieList />
        </div>
      </main>
      <Footer />
    </div >
  )
}

export default Page
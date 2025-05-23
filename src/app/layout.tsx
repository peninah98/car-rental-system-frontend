import React from 'react'
import Navbar from '../component/UI/Navbar'
import Footer from '../component/UI/Footer'


type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout

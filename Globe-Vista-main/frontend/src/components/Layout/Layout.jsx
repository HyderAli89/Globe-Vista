import React from 'react'
import Header from '../Header/Header'
import Footer  from '../Footer/Footer'
import Router from '../../router/Router'

export const Layout = () => {
  return (
    <>
        <Header />
        <Router />
        <Footer />
            
    </>
  )
}
export default Layout

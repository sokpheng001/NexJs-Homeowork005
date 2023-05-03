import Footer_ from '@/component/Footer_'
import React from 'react'
import { Container } from 'react-bootstrap'
import NavBar_ from '@/component/NavBar_'

export default function Layout({children}) {
  return (
    <div>
      <NavBar_></NavBar_>
      <main>
        {children}
      </main>
      <Container>
        <Footer_></Footer_>
      </Container>
    </div>
  )
}

import { PLACEHOLDER } from '@/lib'
import React from 'react'
import { Card, Container, Placeholder } from 'react-bootstrap'

export default function Placeholder_() {
  return (
    <Container className='mt-5'>
    <Card style={{ width: '18rem' }} className='shadow'>
    <Card.Img variant="top" src={PLACEHOLDER} />
    <Card.Body>
      <Placeholder as={Card.Title} animation="glow">
        <Placeholder xs={6} />
      </Placeholder>
      <Placeholder as={Card.Text} animation="glow">
        <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
        <Placeholder xs={6} /> <Placeholder xs={8} />
      </Placeholder>
      <Placeholder.Button variant="dark" xs={6} />
    </Card.Body>
  </Card>
    </Container>
  )
}

import { useRouter } from 'next/router'
import { Button, Card,Container } from 'react-bootstrap';
import React, { useState } from 'react';

export default function Movie({data}) {
    const route = useRouter();
    alert(route.query.title)
  return (
    <Container className=''>
      <Button variant='dark' className='mt-4 mb-4' href='/products'>Previous Page</Button>
      <Button variant='dark' className='float-right mt-4 mb-4'>Buy Now</Button>
      <Card className='shadow mb-4'>
      <Card.Header style={{border:"none"}}>Movie Detail</Card.Header>
      <Card.Img variant="top" alt='thumbnail'
      src={route.query.image} 
      style={{height:"500px",objectFit:"cover"}}
      className='rounded-0'
      />
      <Card.Body>
        <Card.Title style={{textDecoration:"underline"}}>{route.query.title? route.query.title:"Unknown"}</Card.Title>
        <Card.Text>
          {
            route.query.description? route.query.description:"Unknown"
          }
        </Card.Text>
      </Card.Body>
    </Card>
    </Container>
  )
}
//${BASE_URL}movie/${id}/videos?api_key=${API_KEY}

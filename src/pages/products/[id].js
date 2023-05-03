
import React from 'react'
import { Card,Button,Container } from 'react-bootstrap';
import { useRouter } from 'next/router'

export default function Product() {
    const router = useRouter();
  return (
    <Container className=''>
    <Button variant='dark' className='mt-4 mb-4' href='/products'>Previous Page</Button>
    <Button variant='dark' className='float-right mt-4 mb-4'>Buy Now</Button>
    <Card className='shadow mb-4'>
    <Card.Header style={{border:"none"}}>Movie Detail</Card.Header>
    <Card.Img variant="top" alt='thumbnail'
    src={router.query.image} 
    style={{height:"350px", width:"300px"}}
    className='rounded-0 mt-5 mb-5 mx-5'
    />
    <Card.Body>
      <Card.Title style={{textDecoration:"underline"}}>{router.query.title? router.query.title:"Unknown"}</Card.Title>
      <ol style={{listStyle:"inside"}} className='mt-3'>
        <li>
          <span style={{fontWeight:"bold"}}>Category:</span> {router.query.category? router.query.category:"Unknown"}
        </li>
        <li>
          <span style={{fontWeight:"bold"}}>Description: </span> {router.query.description? router.query.description:"Unknown"} 
      </li>
      </ol>
      {/* <Card.Text>
        {
          router.query.description? router.query.description:"Unknown"
        }
      </Card.Text> */}
    </Card.Body>
  </Card>
  </Container>
  )
}

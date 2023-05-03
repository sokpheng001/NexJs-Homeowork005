import Card_ from '@/component/Card_'
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useRouter } from 'next/router';



export default function movie({products}) {
  const get = products;
  console.log(get)
  return (
    <React.Fragment>
      <Container className=''>
        <Row className='row row-cols-xl-4 row-cols-lg-3 row-cols-sm-1 row-cols-md-2'>
        {
          get.length > 0 && get.map(e=>
            (
              <Col className='mt-5 d-flex justify-content-center'>
                <Card_ 
                category={e.category}
                title={e.title} 
                image={e.image} 
                id={e.id}
                description={e.description}
                price={e.price}
                />
              </Col>
            ))
        }
        </Row>
      </Container>
    </React.Fragment>
  )
}
// ====================================================
export async function getServerSideProps(){
  // const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=1%60`;
  const url = `https://fakestoreapi.com/products`;
  const res  = await fetch(url);
  const products = await res.json();
  return{
    props:{
      products,
    },
  }
}
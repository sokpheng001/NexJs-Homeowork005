import Card_ from '@/component/Card_'
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { API_KEY, BASE_PATH, BASE_URL } from '@/lib';
import Carousel_ from '@/component/Carousel_';
import { useRouter } from 'next/router';



export default function movie({movies}) {
  const route = useRouter();
  const get = movies;
  console.log(get)
  return (
    <React.Fragment>
      <Container className=''>
        <Row className='row row-cols-xl-4 row-cols-lg-3 row-cols-sm-1 row-cols-md-2'>
        {
          get.length > 0 && get.map(e=>
            (
              <Col className='mt-5 d-flex justify-content-center'>
                <Card_ title={e.category} 
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
  const movies = await res.json();

  if(!movies){
    return{
      props:{
        movies:[],
      }
    }
  }
  return{
    props:{
      movies,
    },
  }
}
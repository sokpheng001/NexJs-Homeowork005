import Card_ from '@/component/Card_'
import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useRouter } from 'next/router';
import { setRequestMeta } from 'next/dist/server/request-meta';
import Placeholder_ from '@/component/Placeholder_';

export default function movie({products}) {
  const [get,setGet] = useState([]);
  const[isLoading,setIsLoading] = useState(false);
  useEffect(()=>{
    setIsLoading(true)
    setTimeout(()=>{
      setGet(products)
      setIsLoading(false)
    },2000)
  },[])
  if(isLoading){
    return (
      products.map(e=>(
        <Container>
          <Row className='row row-cols-xl-4 row-cols-lg-3 row-cols-sm-1 row-cols-md-2'>
            {
              products.map(e=>(
                <Col className='d-flex justify-content-center'>
                  <Placeholder_/>
                </Col>
              ))
            }
          </Row>
        </Container>
      ))
    )
  }
  // console.log(get)
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
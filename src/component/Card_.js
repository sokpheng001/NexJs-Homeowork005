import { PLACEHOLDER } from '@/lib';
import CardShow from '@/pages/CardShow';
import { Oooh_Baby } from 'next/font/google';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Card_({id,title,price,description,category,image}) {
  const router = useRouter();
    const handlerClick = ()=>{
        router.push({
          pathname: `/products/${id}`,
          query:{ 
            image:image, 
            title:title,
            description:description,
            category:category
          }
        });
    }
    //
  return (
    <div>
      <Card style={{ width: '18rem'}} className='shadow'>
      <Card.Img  src={image ? image : PLACEHOLDER} style={{width:"195px",height:"260px",objectFit:""}} className='mx-5 mt-5'/>
      {/* <img src={image? image:PLACEHOLDER} style={{height:"320px", width:"90%", objectFit:"cover"}}></img> */}
      <Card.Body>
        <Card.Title style={
          {
            height:"20px"
          }
          }>{title ? category:"Unknown"}</Card.Title>
        <Card.Text>
            Price: {price? price :"Unknown"}$
        </Card.Text>
        <Button variant="dark" onClick={handlerClick}>Read More</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

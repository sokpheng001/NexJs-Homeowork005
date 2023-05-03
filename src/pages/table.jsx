
import { Container } from 'react-bootstrap';
import DataTable from 'react-data-table-component'
import { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';



export default function table() {
  const[data,setData] = useState([]);
  const [data1, setData1] = useState("");
  useEffect(()=>{
    fetch("https://fakestoreapi.com/products").then(e=>e.json()).then(e=>setData(e));
  },[])
    const columns = [
        {
            name: 'Model',
            selector: row => row.title,
        },
        {
            name: 'Price ($)',
            selector: row => row.price,
        },
        {
            name:"Category",
            selector:row=>row.category
        },
        {
          name:"Photos", 
          selector:row=><img className="image mt-2 mb-2 " src = {row.image} style={{width:"40px", height:"55px"}}/>
        }  
    ];
    //function for searching
    const search  = (data2)=>{
      return data2.filter((item)=> item.title.toLowerCase().includes(data1.toLowerCase()));
    }
  return (
    <Container>
      <Form className="d-flex float-center mt-4 mb-4">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e)=>setData1(e.target.value)}
            />
            <Button variant="outline-dark">Search</Button>
      </Form>
            <DataTable 
            columns={columns} 
            data={search(data)} 
            className='mt-4 shadow'
            selectableRows
            responsive
            pagination
            ></DataTable>
    </Container>
  )
}

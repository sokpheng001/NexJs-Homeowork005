
import { Container } from 'react-bootstrap';
import DataTable from 'react-data-table-component'
import { Form, Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
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
          selector:row=><img className="image mt-2 mb-2 " src = {row.image} style={{width:"50px", height:"70px"}}/>
        }  
    ];
    //function for searching
    const search  = (data2)=>{
      return data2.filter((item)=> item.title.includes(data1));
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
//====================================
// export async function getServerSideProps(){
//     // const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=1%60`;
//     const url = `https://fakestoreapi.com/products`;
//     const res  = await fetch(url);
//     const data = await res.json();
//     return{
//       props:{
//         data,
//       },
//     }
//   }
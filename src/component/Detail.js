import React,  { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';
import axios from "axios";

function Detail() {
  const [products, setProducts] = useState([]);
  const { id } = useParams();
  
  console.log(products)
  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((res) => {
        setProducts(res.data)
      } 
      )
      .catch((err) => console.log(err));
    }, [id]);
    
  return (
    
    <div className="container mt-4 mx-auto mb-3 border border-dark" style={{width: "90%"}}>
      <div className="row bg-faded">
        <div class="col-4 mt-5 mb-5" >
            <Card  className="card-img-top img-fluid">
                <Card.Img src={products.thumbnail} />
            </Card>
        </div>
        <div className="col-6 mt-5 mx-5" style={{ backgrounColor: "black" }}>
            <div className="text-black">
                <h2>{products.title}</h2>
                <br></br>
                <h2>{products.price}</h2>
                <br></br>
              <div className="d-flex justify-content-between p-2 " style={{marginTop: 200}}>
                <h2>{products.rating}</h2>
                <h2>{products.discountPercentage}</h2>
              </div>
            </div>
        </div>
        <div className="card-body border border-dark me-4 mx-4 mb-4">
        <h5 className="card-title text-center">{products.description}</h5>
       </div>
      </div>
    </div>
  
  )
}

export default Detail

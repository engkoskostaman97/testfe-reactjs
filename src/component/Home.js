import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import axios from "axios";

function Home() {
  const fetchdata = () => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        console.log(res?.data?.products);
        setData(res.data.products);
        return res.data;
      })
      .catch((err) => console.log(err));
  };
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchdata();
  }, []);

  console.log(data);
  return (
    <>
        {data.map((item, i) => (
          <div className="container mt-4 border border-dark">
          <Link
            to={`/detail/${item.id}`}
            className="text-decoration-none"
            style={{ textDecoration: "none" }}
          >
            <div className="row bg-faded">
              <div className="col-4 mt-5 mb-5">
                <Card
                  style={{ width: "18rem", height: "25rem" }}
                  className="text-danger"
                >
                  <Card.Img
                    src={
                    item.thumbnail
                    }
                  />
                </Card>
              </div>
              <div className="col-6 mt-5" style={{ backgrounColor: "black" }}>
                <div className="text-black">
                  <h2>{item?.title}</h2>
                  <br></br>
                  <h2>{item?.brand}</h2>
                  <br></br>
                  <div
                    className="d-flex justify-content-between p-2 "
                    style={{ marginTop: 200 }}
                  >
                    <h2>{item.price}</h2>
                    <h2>{item.discountPercentage}</h2>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          </div>
        ))}
     
    </>
  );
}

export default Home;
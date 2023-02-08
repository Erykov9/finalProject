import { useSelector } from "react-redux";
import { getProducts } from "../../../redux/productsRedux";
import { useEffect } from "react";
import { PRODUCT_URL } from "../../../cfg";

import { useState } from "react";

import Container from 'react-bootstrap/Container';
import Product from "../Product/Product";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import * as React from 'react';
import Pagination from "../../features/Pagination/Pagination";

import './Products.scss'

const Products = () => {
  const products = useSelector(getProducts);

  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(6);
  const [data, setData] = useState([]);

  const pagiLen  = data.length;

  const indexOfLastRecord =  currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

  const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(pagiLen / recordsPerPage);

  useEffect(() => {
    fetch(PRODUCT_URL)
      .then(res => res.json())
      .then(res => setData(res))
      .catch(() => {
        alert('There was an error while retrieving the data')
      })
  }, [])

  return (
    <div>
      <Container className='d-flex justify-content-center align-items-center'>
        <Row >
          {currentRecords.map((product) => <Col key={product.id} className='pad' lg={4} md={6}><Product product={product}/></Col>)}
        </Row>
      </Container>
      <Pagination
          nPages={nPages}
          currentPage={currentPage} 
          setCurrentPage={setCurrentPage}
      />
    </div>
  
  )
};

export default Products;
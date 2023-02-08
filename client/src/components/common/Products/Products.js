import { useSelector } from "react-redux";
import { getProducts } from "../../../redux/productsRedux";
import { useEffect } from "react";
import { getAllProducts } from "../../../redux/productsRedux";
import { useDispatch } from "react-redux";

import { useState } from "react";

import Container from 'react-bootstrap/Container';
import Product from "../Product/Product";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import * as React from 'react';
import Pagination from "../../features/Pagination/Pagination";

import './Products.scss'

const Products = () => {
  const dispatch =  useDispatch();
  const products = useSelector(getProducts);
  const pagiLen  = products.length

  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(6);

  const indexOfLastRecord =  currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

  const currentRecords = products.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(pagiLen / recordsPerPage);

  useEffect(() => {
    dispatch(getAllProducts())
  }, [])

  return (
    <div>
      <Container className='d-flex justify-content-center align-items-center'>
        <Row >
          {products.map((product) => <Col key={product.id} className='pad' lg={4} md={6}><Product product={product}/></Col>)}
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
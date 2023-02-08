import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import { getProducById } from '../../../redux/productsRedux';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllProducts } from '../../../redux/productsRedux';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

import { addOrder } from '../../../redux/orderRedux';


import './SingleProduct.scss';

const SingleProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch()
  const [amount, setAmount] = useState(0)

  useEffect(() => {
    dispatch(getAllProducts())
  }, [])

  const product = useSelector((state) => getProducById(state, id));
  console.log(product)

  const orderHandler = (e) => {
    e.preventDefault();
    dispatch(addOrder(product))
  }

  if(!product) {
    return <div>loading</div>
  } else {
    return (
      <>
      <Card className='d-flex flex-row'>
          <Card.Img variant="start" src={`/uploads/product/${product.image}`} />
          <Card.Body>
            <Card.Text>
              Product: <strong>{product.name}</strong>
            </Card.Text>
            <Card.Text>
              Description: <strong>{product.description}</strong>
            </Card.Text>
            <Card.Text>
              Price: <strong>{product.price},-</strong>
            </Card.Text>
            <Card.Text>
              Publish date: <strong>{product.createdAt.toLocaleString()}</strong>
            </Card.Text>
            <Button onClick={e => orderHandler(e)}>Add to cart</Button> 
            <label>
              Amount
              <input type="number" value={amount} onChange={e => setAmount(e.target.value)}/>
            </label>  
          </Card.Body>
        </Card>
        </>
    )
  }
};

export default SingleProduct;
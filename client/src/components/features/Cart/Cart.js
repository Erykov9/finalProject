import Offcanvas from 'react-bootstrap/Offcanvas';
import Badge from 'react-bootstrap/Badge';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { ORDER_URL } from '../../../cfg';

import { AiOutlineShoppingCart } from 'react-icons/ai';

import { useDispatch } from 'react-redux';
import { addOrderList } from '../../../redux/orderRedux';
import { finishOrder } from '../../../redux/orderRedux';
import { deleteAllOrders } from '../../../redux/orderRedux';
import { useSelector } from 'react-redux';
import { getOrdersList } from '../../../redux/orderRedux';
import { clearOrder } from '../../../redux/orderRedux';
import { useState } from 'react';

import CartProduct from '../CartProduct/CartProduct';

import './Cart.scss'

const Cart = (props) => {
  const dispatch = useDispatch();
  const orderAmount = props.order.length;
  const ordersList = useSelector(getOrdersList);

  const [orderProgress, setOrderProgress] = useState('order')
  const [email, setEmail] = useState('');
  const [payment, setPayment] = useState('Cash');

  let total = 0
  for(let or of props.order) {
    total = total + (or.price *  Number(or.amount))
  };

  const orderHandler = (e) => {
    e.preventDefault();
    dispatch(addOrderList({orderList: [...props.order], total}));
    setOrderProgress('orderForm')
  };

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(finishOrder({products: [...props.order], total, email, payment}));
    dispatch(deleteAllOrders());
    setOrderProgress('done');

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({products: [...props.order], total, email, payment})
    };


    fetch(ORDER_URL, options)
      .then(res => res.json())
      .then(res => console.log(res))

    setTimeout(() => {
      setOrderProgress('order');
      dispatch(clearOrder())
    }, 4000);
  };


  if(orderProgress === 'order') {
  return (
      <>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title><AiOutlineShoppingCart/> Cart <Badge bg="success">{orderAmount}</Badge></Offcanvas.Title>
        </Offcanvas.Header>
        {props.order.length === 0 ? <Offcanvas.Body><Alert  variant='warning'>Your cart is empty!</Alert></Offcanvas.Body> : <Offcanvas.Body className='mid'>
          <h2>Products</h2>
          {props.order.map(o  => 
          <>
          <CartProduct product={{...o}}/>
          </>
            
          )}
          <h2>Total: {total},-</h2>
          <div className='d-flex justify-content-center'>
            <Button variant="success" onClick={(e)  => orderHandler(e)}>Order</Button>
          </div>
        </Offcanvas.Body>} 
      </>
  )
  } else if(orderProgress === 'orderForm') {
    return (
    <>
     <Offcanvas.Header closeButton>
          <Offcanvas.Title><AiOutlineShoppingCart/> Cart <Badge bg="success">{orderAmount}</Badge></Offcanvas.Title>
        </Offcanvas.Header>
        {props.order.length === 0 ? <Offcanvas.Body><Alert  variant='warning'>Your cart is empty!</Alert></Offcanvas.Body> :
        
        <Offcanvas.Body className='mid'>
          <Form onSubmit={(e)  => submitHandler(e)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" onChange={e  => setEmail(e.target.value)} required/>
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="paymentMethod">
            <Form.Select aria-label="Default select example" onChange={e => setPayment(e.target.value)} required>
              <option disabled>Payment method</option>
              <option value="cash">Cash</option>
              <option value="paypal">Paypal</option>
              <option value="card">Card</option>
            </Form.Select>
            </Form.Group>
            <Button variant="primary" type="submit" >
              Order
            </Button>
          </Form>
          <h2>Products</h2>
          {ordersList[0].orderList.map(o  => 
          <>
          <CartProduct product={{...o}} order='order'/>
          </>
            
          )}
          <h2>Total: {total},-</h2>
        </Offcanvas.Body>} 
    </>
    )
  } else if(orderProgress === 'done') {
    return (
    <>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title><AiOutlineShoppingCart/> Cart <Badge bg="success">{orderAmount}</Badge></Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Alert variant='success'>Order has been send successfully! Thank you for your order</Alert>
      </Offcanvas.Body>
    </>
    )
  }
};

export default Cart;
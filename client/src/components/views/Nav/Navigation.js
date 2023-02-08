import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import ListGroup  from 'react-bootstrap/ListGroup';
import Alert from 'react-bootstrap/Alert';

import { AiOutlineShoppingCart } from 'react-icons/ai';
import {AiFillDelete} from 'react-icons/ai'

import { NavLink } from 'react-router-dom'
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { getOrders } from '../../../redux/orderRedux';
import { useSelector } from 'react-redux';
import { deleteOrder } from '../../../redux/orderRedux';

import Cart from '../../features/Cart/Cart';

import './Navigation.scss';


function Navigation() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const order = useSelector(getOrders)
  const orderAmount = order.length;


  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand><NavLink to='/'>ELECTRONIC SHOP</NavLink></Navbar.Brand>
          <Nav className="d-flex  justify-content-end">
            <Nav.Link as={NavLink} to='/'>Home</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav variant="pills">
              <Button variant="primary" onClick={handleShow}>
              <AiOutlineShoppingCart/> Cart <Badge bg="secondary">{orderAmount}</Badge>
                <span className="visually-hidden">unread messages</span>
              </Button>
            </Nav>
          </Nav>
        </Container>
      </Navbar>

      

      <Offcanvas show={show} onHide={handleClose} placement='end'>
        <Cart order={order}/>
      </Offcanvas>
    </>
  );
}

export default Navigation;
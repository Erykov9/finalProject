import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import {AiOutlineStar} from 'react-icons/ai';
import {AiFillStar} from 'react-icons/ai';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import {BsInfoCircle} from 'react-icons/bs'

import { cutter } from '../../../utils/stringCut';

import { useNavigate } from 'react-router-dom';

import { addOrder } from '../../../redux/orderRedux';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getOrders } from '../../../redux/orderRedux';
import { useState } from 'react';

const Product = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const orders = useSelector(getOrders);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);


  const date = props.product.createdAt;
  const newDate = new Date(date);
  const shortDescription = cutter(props.product.description);

  const naviHandler = () => {
    navigate('/products/' + props.product.id)
  };

  const checkId = (id) => {
    return orders.some(function(el) {
      return el.id === id;
    })
  }

  const orderHandler = (e) => {
    e.preventDefault();

    if(orders.length === 0) {
      dispatcher()
    } else {
      checkId(e.target.value) === true ? setShow(true) : dispatcher();
    }
  }

  const dispatcher = () => {
    dispatch(addOrder({...props.product, amount: 1, description: ''}))
  }

  return  (
    <>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Hey! You!</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.product.name} is already in your shopping cart! :)</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={`uploads/product/${props.product.image}`} />
    <Card.Body>
      <Card.Title>{props.product.name}</Card.Title>
      <Card.Text>
        {shortDescription}
      </Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush">
      <ListGroup.Item>Price: <strong>{props.product.price}</strong>,-</ListGroup.Item>
      <ListGroup.Item>Rate: {[1,2,3,4,5].map(i => i <= props.product.rate ? <AiFillStar key={i}/> : <AiOutlineStar key={i}/>)}</ListGroup.Item>
      <ListGroup.Item>Published: <strong>{newDate.toLocaleString()}</strong></ListGroup.Item>
    </ListGroup>
    <Card.Body className='d-flex justify-content-between align-items-center'>
      <Button variant="dark" onClick={e => orderHandler(e)} value={props.product.id}>Add to cart <AiOutlineShoppingCart/></Button>
      <Button variant="secondary" onClick={naviHandler}>More info <BsInfoCircle/></Button>
    </Card.Body>
  </Card>
  </>

  )
};

export default Product;
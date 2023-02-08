import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';

import { AiFillDelete } from 'react-icons/ai';

import { useDispatch } from 'react-redux';
import { editOrder } from '../../../redux/orderRedux';
import { deleteOrder } from '../../../redux/orderRedux';
import { useState } from 'react';

import './CartProduct.scss';

const CartProduct = ({product, order}) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const orderDescriptionHandler = (e, order) => {
    dispatch(editOrder({...order, description: e}));
  };

  const add = () => {
    setQuantity(quantity + 1)
    dispatch(editOrder({...product, amount: quantity + 1}));

  };

  const del = () => {
    setQuantity(quantity - 1)
    if((quantity - 1) < 1) {
      setQuantity(1);
      dispatch(editOrder({...product, amount: 1}));
    }
    dispatch(editOrder({...product, amount: quantity - 1}));
  };

  const deleteHander = (e, o) =>  {
    e.preventDefault();
    dispatch(deleteOrder(o))
  };


  if(order === 'order') {
    return (
      <>
        <ListGroup horizontal='md' className="my-2" key={product.orderId}>
            <ListGroup.Item variant="dark">{product.name}</ListGroup.Item>
            <ListGroup.Item variant="dark">{product.price * product.amount},-</ListGroup.Item>
            <ListGroup.Item variant="dark"><span>{product.amount}X</span></ListGroup.Item>
        </ListGroup>
        <ListGroup horizontal='md' className="my-2" >
        <ListGroup.Item variant="dark">Description: {product.description}</ListGroup.Item>
        </ListGroup>
      </>
    )
  } else {

    return (
      <>
        <ListGroup horizontal='md' className="my-2" key={product.orderId}>
          <ListGroup.Item variant="primary">{product.name}</ListGroup.Item>
          <ListGroup.Item variant="primary">{product.price * quantity},-</ListGroup.Item>
          <ListGroup.Item variant="danger" onClick={e => deleteHander(e, product.orderId)}><AiFillDelete/></ListGroup.Item>
          <ListGroup.Item variant="dark"><span onClick={quantity === 1 ? null : del} className='spm'>-</span><span className='qu'>{quantity}</span><span onClick={add} className='spp'>+</span></ListGroup.Item>
        </ListGroup>
        <ListGroup className='mb-5'>
          <ListGroup.Item variant="dark">    
          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Description</Form.Label>
            <Form.Control placeholder="Ex. I want the red variant..." onChange={e => orderDescriptionHandler(e.target.value, product)}/>
          </Form.Group>
          </ListGroup.Item>
        </ListGroup>
      </>
    )
  }
};

export default CartProduct;
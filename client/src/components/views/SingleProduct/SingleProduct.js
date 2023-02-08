import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';


import { getProducById } from '../../../redux/productsRedux';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllProducts } from '../../../redux/productsRedux';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useState } from 'react';


import { addOrder } from '../../../redux/orderRedux';
import { getOrders } from '../../../redux/orderRedux';


import './SingleProduct.scss';

const SingleProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  useEffect(() => {
    dispatch(getAllProducts())
  }, []);

  const product = useSelector((state) => getProducById(state, id));
  const orders = useSelector(getOrders);

  const checkId = () => {
    return orders.some(function(el) {
      return el.id === id;
    })
  }

  const orderHandler = (e) => {
    e.preventDefault();

    if(orders.length === 0) {
      dispatch(addOrder({...product, amount: 1}))
    } else {
      checkId(e.target.value) === true ? setShow(true) : dispatch(addOrder({...product, amount: 1}));
    }
  }

  if(!product) {
    return <div>loading</div>
  } else {
    return (
      <div className='single-box'>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Hey! You!</Modal.Title>
        </Modal.Header>
        <Modal.Body>{product.name} is already in your shopping cart! :)</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Card className='d-flex flex-row'>
      <Carousel className=' carouselCustom' slide={false}>
      <Carousel.Item className='carouselCustom'>
        <img
          className="d-block w-100"
          src={`/uploads/product/${product.image}`}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item className='carouselCustom'>
        <img
          className="d-block w-100"
          src={`/uploads/product/${product.image}`}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item className='carouselCustom'>
        <img
          className="d-block w-100"
          src={`/uploads/product/${product.image}`}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
          <Card.Body className='cardBody'>
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
          </Card.Body>
        </Card>
        </div>
    )
  }
};

export default SingleProduct;
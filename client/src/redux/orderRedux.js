import { v4 as uuidv4 } from 'uuid'

export const getOrders = ({order}) => order.data;
export const getOrdersList  = ({order}) => order.order;
export const getOrderById = ({order}, id)  => order.order.find(oid => oid.orderListId === id);
export const getFinishedOrder = ({order}) => order.finishedOrder;

export const addOrder = payload => ({type: ADD, payload})
export const deleteOrder = payload => ({payload, type: DELETE});
export const addOrderList = payload => ({type: ADD_ORDER, payload});
export const editOrder = payload => ({type: EDIT_ORDER, payload});
export const deleteAllOrders = payload => ({type: DELETE_ALL, payload});
export const finishOrder = payload =>  ({type: FINISH_ORDER, payload});
export const clearOrder = payload =>  ({type: CLEAR, payload})

const reducerName = 'order';
const createActionName = actionName => `app/${reducerName}/${actionName}`;

const ADD = createActionName('ADD');
const DELETE = createActionName('DELETE');
const ADD_ORDER = createActionName('ADD_ORDER');
const EDIT_ORDER = createActionName('EDIT_ORDER');
const DELETE_ALL = createActionName('DELETE_ALL');
const FINISH_ORDER = createActionName('FINISH_ORDER');
const CLEAR = createActionName('CLEAR')


const initialState = {
  data: [],
  order: [],
  finishedOrder: [],
};


export default function reducer(statePart = initialState, action) {
  switch(action.type) {
    case ADD:
      return { ...statePart, data: [...statePart.data, {...action.payload, orderId: uuidv4()} ] };
    case DELETE:
      return { ...statePart, data: statePart.data.filter(order => order.orderId !== action.payload)};
    case ADD_ORDER:
      return { ...statePart, order: [...statePart.order, {...action.payload}]}
    case EDIT_ORDER:
      return {...statePart, data: statePart.data.map(item => item.id === action.payload.id ?  {...item, ...action.payload} : item)}
    case DELETE_ALL:
      return {...statePart, data: [], order: []}
    case FINISH_ORDER:
      return {...statePart, data: [], order: [], finishedOrder: [...statePart.finishedOrder, {...action.payload}]}
    case CLEAR: 
      return {...statePart, data: [], order: [], finishedOrder: []}
    default:
      return statePart;
  }
}
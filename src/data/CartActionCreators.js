import { ActionTypes } from "./Types";

// 액션 실행에 필요한 데이터를 운반하는 payload 프로퍼티

export const addToCart = (Product, quantity) => ({
  type: ActionTypes.CART_ADD,
  payload: {
    product,
    quantity: quantity || 1,
  },
});

export const upadateCartQuantity = (Product, quantiry) => ({
  type: ActionTypes.CART_UPDATE,
  payload: {
    product,
    quantity,
  },
});

export const removeFromCart = (Product) => ({
  type: ActionTypes.CART_REMOVE,
  payload: {
    product,
  },
});

export const claerCart = () => ({
  type: ActionTypes.CART_CLEAR,
});

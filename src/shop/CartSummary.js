import React, { Component } from "react";
import { Link } from "react-router-dom";

/*
사용자에게 쇼핑 카트의 내용을 요약해보여주기 위한 컴포넌트.
요약 내용을 만들기 위해 필요한 데이터를 cartItems와 cartPriceprops를 통해 받는다.

리액트에서 조건부 렌더링을 하는 가장 깔끔한 방법은 자바스크립트를 사용해 HTML로 표현되는결과를
리턴하는 메서드를 정의하는 것이다.
다른 접근법으로는 인라인에서 논릭곱 연산자(&&)를 사용하는 방법이 있는데 이는 간단한 표현식의 경우에 유용하다.
*/
export class CartSummary extends Component {
  getSummary = () => {
    if (this.props.cartItems > 0) {
      return (
        <span>
          {this.props.cartItems} Item(s), ${this.props.cartPrice.toFixed(2)}
        </span>
      );
    } else {
      return <span>Your cart: (empty)</span>;
    }
  };

  getLinkClasses = () => {
    return `btn btn-sm bg-dart text-white ${
      this.props.cartItems === 0 ? "disabled" : ""
    }`;
  };

  render() {
    return (
      <div className="float-right">
        <small>
          {this.getSummary()}
          <Link className={this.getLinkClasses()} to="/shop/cart">
            <i className="fa fa-shopping-cart"></i>
          </Link>
        </small>
      </div>
    );
  }
}
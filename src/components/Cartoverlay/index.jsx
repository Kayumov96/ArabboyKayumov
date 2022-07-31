import React, { Component } from "react";
import { Btn, CartItems, Colors, Select, Sizes } from "./style";
import MainContext from "../Context";

class CartOverlay extends Component {
  static contextType = MainContext;
  constructor(props) {
    super(props);
    this.state = {
      // eur: "",
      // usd: "",
      // jpy: "",
      // showCart: false,
      // totalPrice: 0,
      // valute: "$",
      count: props.value.count || 1,
      // cart: this?.props?.value || [],
    };
    // this.showMyCart = this.showMyCart.bind(this);
  }
  // componentDidUpdate(prevProps) {
  //   if (prevProps?.cart !== this?.context?.cart)
  //     this.fetchData(this.context?.cart);
  // }
  // showMyCart() {
  //   this.setState((state) => ({
  //     showCart: !state.showCart,
  //   }));
  // }
  getColor(type) {
    // console.log(type, "rang");
    switch (type) {
      case "grey":
        return <Colors grey />;
        break;
      case "pink":
        return <Colors pink />;
        break;
      case "yellow":
        return <Colors yellow />;
        break;
      case "green":
        return <Colors green />;
        break;
      case "black":
        return <Colors black />;
        break;
      case "red":
        return <Colors red />;
        break;
      default:
        <Colors white />;
        break;
    }
  }

  updateCount(num) {
    for (let i in this.context.cart) {
      if (this.props.value.id === this.context.cart[i].id) {
        this.context.cart[i].count = this.context.cart[i].count ? this.context.cart[i].count+num : num+1;
        this.setState({count: this.context.cart[i].count});
        let total = 0;
        let count = 0;
        for (let j in this.context.cart) {
          total+=parseFloat(this.context.cart[j].price * (this.context.cart[j].count || 1))
          count+=parseInt(1 * (this.context.cart[j].count || 1))
        }
        document.getElementById("total-price").innerText = total;
        document.getElementById("all-items-count").innerText = count;

        break;
      }
    }
    return this.context.cart;
  }
  render() {
    const { value } = this.props;
    // const context = this.context;
    return (
      <>
        <CartItems key={value.id}>
          <CartItems.Description>
            <span> {value?.title}</span>
            <h4>
              {this.state.valute}
              {""}
              {value?.price}
            </h4>
            Size:
            <div style={{ display: "flex", gap: "4px" }}>
              {value?.size.map((val, index) => (
                <Sizes key={index}>{val}</Sizes>
              ))}
            </div>
            Color:
            <div style={{ display: "flex", gap: "6px" }}>
              {value?.color.map((v) => (
                <Sizes>{this.getColor(v)}</Sizes>
              ))}
            </div>
          </CartItems.Description>
          <Select.BtnDiv
            style={{
              width: "8%",
              height: "100%",
              flexDirection: "column",
              padding: "6px 3px",
            }}
          >
            <Btn onClick={() => console.log(this.updateCount(1))}>
              +
            </Btn>
            {this.state.count}
            <Btn onClick={() => console.log(this.updateCount(-1))}>
              -
            </Btn>
          </Select.BtnDiv>
          <CartItems.Img
            src={value.src}
            alt="product"
            // style={{ width: "25px" }}
          />
        </CartItems>
      </>
    );
  }
}

export default CartOverlay;

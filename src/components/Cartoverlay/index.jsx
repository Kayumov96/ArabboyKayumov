import React, { Component } from "react";
import { Btn, CartItems, Colors, Select, Sizes } from "./style";
import MainContext from "../Context";

class CartOverlay extends Component {
  static contextType = MainContext;
  constructor(props) {
    super(props);
    this.state = {
      eur: "",
      usd: "",
      jpy: "",
      showCart: false,
      totalPrice: 0,
      valute: "$",
      count: 1,
      cart: this?.props?.value || [],
    };
    this.showMyCart = this.showMyCart.bind(this);
  }
  // componentDidUpdate(prevProps) {
  //   if (prevProps?.cart !== this?.context?.cart)
  //     this.fetchData(this.context?.cart);
  // }
  showMyCart() {
    this.setState((state) => ({
      showCart: !state.showCart,
    }));
  }
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
  render() {
    const { value } = this.props;
    const context = this.context;
    const onSelect = (e) => {
      console.log(context.priceType, e);
      // this.setState(contex.priceType= e.target.value );
      this.setState({ valute: e.target.value });
    };
    const handlePrice = () => {
      let price = 0;
      context?.map((item) => (price += item.length * item.price));
      this.setState({ totalPrice: price });
    };
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
            <Btn onClick={() => this.setState({ count: this.state.count + 1 })}>
              +
            </Btn>
            {this.state.count}
            <Btn onClick={() => this.setState({ count: this.state.count - 1 })}>
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

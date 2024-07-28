import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import {
  ProductCartContainer,
  Footer,
  Name,
  Price,
} from "./product-card.styles";
import { addItemToCart } from "../../store/cart/cart.actions";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItemsSlice } from "../../store/cart/cart.selectors";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItemsSlice);

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

  return (
    <ProductCartContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to card
      </Button>
    </ProductCartContainer>
  );
};

export default ProductCard;

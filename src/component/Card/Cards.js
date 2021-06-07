import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
  Typography,
} from "@material-ui/core";
import { useDispatch } from "react-redux";

//icon
import FavoriteIcon from "@material-ui/icons/Favorite";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
//css
import Styles from "./cards.module.css";
//component
import { addToCart } from "../../Store/Actions/ProductAction";

function Cards({ product_name, description, img, price, currency, id }) {
  const dispatch = useDispatch();
  function addCart(pid) {
    dispatch(addToCart(pid));
  }
  return (
    <Card className={Styles.root}>
      <CardHeader title={product_name} subheader={`${price} ${currency}`} />
      <CardMedia className={Styles.media} title={product_name}>
        <img src={img} />
      </CardMedia>
      <CardContent>
        <Typography color="textSecondary" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="add to cart" onClick={() => addCart(id)}>
          <AddShoppingCartIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default Cards;

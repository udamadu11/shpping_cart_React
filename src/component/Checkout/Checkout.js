import React from "react";
import {
  Container,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import Styles from "./checkout.module.css";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import DeleteIcon from "@material-ui/icons/Delete";
import { useSelector } from "react-redux";

const useStyles = makeStyles(() => ({
  container: {
    marginTop: "10px",
    left: "0",
  },
  root: {
    display: "flex",
    width: "400px",
    marginTop: "15px",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 100,
  },
  controls: {
    display: "flex",
    alignItems: "center",
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

function Checkout(props) {
  const Styles = useStyles();
  const bucketItem = useSelector((state) => state.bucket);
  console.log(bucketItem);

  return (
    <Container maxWidth="md" fixed={true} className={Styles.container}>
      {bucketItem.map((item) => {
        const { id, product_name, price, thumb, currency, quantity } = item;
        return (
          <Card className={Styles.root}>
            <div className={Styles.details}>
              <CardContent className={Styles.content}>
                <Typography component="h5" variant="h5">
                  {product_name}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  {`${currency} ${price}`}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  {quantity}
                </Typography>
              </CardContent>
              <div className={Styles.controls}>
                <IconButton aria-label="remove">
                  <RemoveIcon />
                </IconButton>
                <IconButton aria-label="delete">
                  <DeleteIcon className={Styles.playIcon} />
                </IconButton>
                <IconButton aria-label="add">
                  <AddIcon />
                </IconButton>
              </div>
            </div>
            <CardMedia title={product_name} style={{ marginLeft: 100 }}>
              <img src={thumb} className={Styles.cover} />
            </CardMedia>
          </Card>
        );
      })}
    </Container>
  );
}

export default Checkout;

import React from "react";
import {
  Paper,
  TableRow,
  TableHead,
  TableContainer,
  TableCell,
  TableBody,
  Table,
  Container,
  IconButton,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AddCircleRoundedIcon from "@material-ui/icons/AddCircleRounded";
import RemoveCircleRoundedIcon from "@material-ui/icons/RemoveCircleRounded";
import { useDispatch, useSelector } from "react-redux";
import { addCart, removeCart } from "../../Store/Actions/ProductAction";
const useStyles = makeStyles(() => ({
  table: {
    minWidth: 700,
  },
  container: {
    marginTop: "20px",
  },
}));

function Checkout() {
  const classes = useStyles();
  const bucketItem = useSelector((state) => state.bucket);
  const bucketTotal = useSelector((state) => state.total);
  const dispatch = useDispatch();

  function add(id) {
    dispatch(addCart(id));
  }
  function remove(id) {
    dispatch(removeCart(id));
  }
  return (
    <Container maxWidth="md" className={classes.container}>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="spanning table">
          <TableHead>
            <TableRow>
              <TableCell align="center" colSpan={4}>
                Details
              </TableCell>
              <TableCell align="right" colSpan={2}>
                Price
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Desc</TableCell>
              <TableCell align="right">Add</TableCell>
              <TableCell align="right">Qty.</TableCell>
              <TableCell align="right">remove</TableCell>
              <TableCell align="right">Unit</TableCell>
              <TableCell align="right">Sum</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {bucketItem.map((data) => (
              <TableRow key={data.id}>
                <TableCell>{data.product_name}</TableCell>
                <TableCell align="right">
                  <IconButton onClick={() => add(data.id)}>
                    <AddCircleRoundedIcon color="primary" />
                  </IconButton>
                </TableCell>
                <TableCell align="right">{data.quantity}</TableCell>
                <TableCell align="right">
                  <IconButton onClick={() => remove(data.id)}>
                    <RemoveCircleRoundedIcon color="secondary" />
                  </IconButton>
                </TableCell>
                <TableCell align="right">{data.price}</TableCell>
                <TableCell align="right">
                  {data.quantity * data.price}
                </TableCell>
              </TableRow>
            ))}

            <TableRow>
              <TableCell></TableCell>
              <TableCell colSpan={4}>Total</TableCell>
              <TableCell align="right">{bucketTotal}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default Checkout;

import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Badge,
  MenuItem,
  Menu,
} from "@material-ui/core";

//icons
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import FavoriteIcon from "@material-ui/icons/Favorite";
//css
import Styles from "./header.module.css";

function Header({ handleChange }) {
  return (
    <div className={Styles.grow}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={Styles.menuButton}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={Styles.title} variant="h5">
            Shopping Cart
          </Typography>
          <div className={Styles.search}>
            <div className={Styles.searchIcon}>
              <SearchIcon color="primary" />
            </div>
            <InputBase
              placeholder="Search..."
              inputProps={{ "aria-label": "Search" }}
              className={Styles.inputBase}
              onChange={handleChange}
            />
          </div>
          <div className={Styles.grow}>
            <div>
              <IconButton>
                <Badge badgeContent={4} color="secondary">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
              <IconButton>
                <Badge badgeContent={4} color="secondary">
                  <FavoriteIcon />
                </Badge>
              </IconButton>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;

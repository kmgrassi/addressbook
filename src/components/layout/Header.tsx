import { createStyles, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import SearchAppBar from "../appBar/AppBar";

export function Header(props) {
  return (
    <div id="header">
      <SearchAppBar />
    </div>
  );
}

export default Header;

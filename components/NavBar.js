import React from "react";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Link from "next/link";
import { StyledAppBar, Logo } from "@/styles/navbar/navbar.styles";

const Navbar = (props) => {
  return (
    <>
      <StyledAppBar
        position="fixed"
        elevation={props.isScrolled ? 5 : 0}
        isScrolled={props.isScrolled}
      >
        <Toolbar>
          <Link href="/">
            <Box sx={{ flexGrow: 1 }}>
              <Logo>Assignment</Logo>
            </Box>
          </Link>
        </Toolbar>
      </StyledAppBar>
    </>
  );
};

export default Navbar;

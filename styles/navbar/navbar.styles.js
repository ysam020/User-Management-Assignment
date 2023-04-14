import styled from "styled-components";
import AppBar from "@mui/material/AppBar";

export const StyledAppBar = styled(({ isScrolled, ...props }) => (
  <AppBar {...props} />
))`
  background-color: ${(props) =>
    props.isScrolled ? "#3081ED" : "transparent"} !important;
`;

export const Logo = styled.a`
  margin: 0;
  padding: 0;
  font-size: 2rem;
  color: #fff !important;
`;

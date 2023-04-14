import Box from "@mui/material/Box";
import styled from "styled-components";

export const StyledModalBox = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  background-color: #fff;
  box-shadow: 2px 2px 10px 8px rgba(0, 0, 0, 0.3);
  padding: 30px;
`;

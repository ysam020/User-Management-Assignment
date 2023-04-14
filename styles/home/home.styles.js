import styled from "styled-components";
import { Container } from "react-bootstrap";
import { Fab } from "@mui/material";

export const ContentContainer = styled(Container)`
  margin-top: 80px;
  margin-bottom: 50px;

  @media (max-width: 575.98px) {
    margin-top: 60px;
  }
`;

export const AddButton = styled(Fab)`
  position: fixed !important;
  bottom: 40px;
  right: 20px;
  width: 50px;
  height: 50px;
`;

export const SearchContainer = styled.div`
  padding: 20px 0;

  input {
    width: 100%;
    padding: 10px;
    border: none;
    outline: none;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 5px;
  }
`;

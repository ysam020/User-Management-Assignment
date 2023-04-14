import React from "react";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import AddUserForm from "@/forms/AddUserForm";
import { StyledModalBox } from "@/styles/modal/styledModal.styles";

function AddUserModal(props) {
  return (
    <Modal
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="add-user-modal"
    >
      <StyledModalBox>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Add a user
        </Typography>
        <AddUserForm handleClose={props.handleClose} />
      </StyledModalBox>
    </Modal>
  );
}

export default AddUserModal;

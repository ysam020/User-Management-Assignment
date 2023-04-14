import React from "react";
import { Avatar } from "@mui/material";
import { UserCardWrapper, UserInfo } from "@/styles/userCard/userCard.styles";

const UserCard = (props) => {
  return (
    <UserCardWrapper>
      <Avatar />
      <UserInfo>
        <h5>{props.user.username}</h5>
        <p>
          {`User ID: ${props.user.id}`} <br />
          {`Email: ${props.user.email}`} <br />
          {`Phone: ${props.user.phone}`}
        </p>
      </UserInfo>
    </UserCardWrapper>
  );
};

export default UserCard;

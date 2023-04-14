import styled from "styled-components";

export const UserCardWrapper = styled.div`
  display: flex;
  margin: 20px 5px;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(8px);
  padding: 20px;
  border-radius: 5px;
`;

export const UserInfo = styled.div`
  flex: 1;
  padding-left: 20px;

  h5 {
    margin: 0;
  }

  p {
    margin-bottom: 0;
    color: rgba(0, 0, 0, 0.5);
  }
`;

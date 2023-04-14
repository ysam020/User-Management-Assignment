import { useState, useEffect } from "react";
import axios from "axios";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import AddUserModal from "@/components/AddUserModal";
import Navbar from "@/components/NavBar";
import { Row, Col } from "react-bootstrap";
import UserCard from "@/components/UserCard";
import Search from "@/components/Search";
import { UserContext } from "@/contexts/Context";
import { ContentContainer, AddButton } from "@/styles/home/home.styles";

export default function Home({ data }) {
  useState;
  const [isScrolled, setIsScrolled] = useState(false);
  const [users, setUsers] = useState(data);
  const [numOfUsers, setNumOfUsers] = useState(users.length);
  const [searchInput, setSearchInput] = useState("");

  // Add user modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Filter users on search
  const filteredUsers = users.filter(
    (user) =>
      user.username.toLowerCase().includes(searchInput.toLowerCase()) ||
      user.email.toLowerCase().includes(searchInput.toLowerCase())
  );

  // Check if page is scrolled
  useEffect(() => {
    const content = document.getElementById("content");

    document.addEventListener("scroll", function () {
      if (content.getBoundingClientRect().top < 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
  }, []);

  return (
    <UserContext.Provider
      value={{
        users: users,
        setUsers: setUsers,
        numOfUsers: numOfUsers,
        setNumOfUsers: setNumOfUsers,
      }}
    >
      <Navbar isScrolled={isScrolled} />

      <ContentContainer id="content">
        <Row>
          <Search setSearchInput={setSearchInput} />

          {filteredUsers.map((user) => {
            return (
              <Col xs={4} key={user.id}>
                <UserCard user={user} />
              </Col>
            );
          })}
        </Row>

        <AddButton
          size="small"
          color="secondary"
          aria-label="add"
          onClick={handleOpen}
        >
          <PersonAddIcon />
        </AddButton>
      </ContentContainer>

      <AddUserModal open={open} handleClose={handleClose} />
    </UserContext.Provider>
  );
}

export async function getServerSideProps() {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  const data = response.data;

  return {
    props: {
      data,
    },
  };
}

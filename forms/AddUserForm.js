import React, { useContext, useState } from "react";
import { useFormik } from "formik";
import { TextField } from "@mui/material";
import { validationSchema } from "../schemas/AddUserSchema";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import { UserContext } from "@/contexts/Context";
import { SubmitFormButton } from "@/styles/button/styledButton.styles";

const AddUserForm = () => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const userContext = useContext(UserContext);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
    },

    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        setLoading(true);
        const response = await axios.post(
          "https://jsonplaceholder.typicode.com/users",
          values
        );
        if (response.status === 201) {
          setMessage("User added successfully!");
          userContext.setUsers([
            ...userContext.users,
            {
              id: userContext.numOfUsers + 1, // set id equal to existing number of users + 1
              username: response.data.name,
              email: response.data.email,
              phone: response.data.phone,
            },
          ]);
        } else {
          setMessage("Something went wrong, please try again.");
        }
      } catch (error) {
        console.error(error);
        setMessage("Something went wrong, please try again.");
      } finally {
        setLoading(false);
        userContext.setNumOfUsers((prev) => prev + 1); // update the number of users
      }
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          size="small"
          margin="dense"
          variant="filled"
          fullWidth
          id="name"
          name="name"
          label="Name"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <TextField
          size="small"
          margin="dense"
          variant="filled"
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          size="small"
          margin="dense"
          variant="filled"
          fullWidth
          id="phone"
          name="phone"
          label="Phone"
          inputProps={{ maxLength: 10 }}
          value={formik.values.phone}
          onChange={formik.handleChange}
          error={formik.touched.phone && Boolean(formik.errors.phone)}
          helperText={formik.touched.phone && formik.errors.phone}
        />

        <SubmitFormButton
          fullWidth
          type="submit"
          disabled={loading} // button will be disabled while loading is true, i.e form is submitting
        >
          {loading ? (
            <CircularProgress
              sx={{
                width: "30px !important",
                height: "30px !important",
                marginLeft: "10px",
              }}
            />
          ) : (
            "Add user"
          )}
        </SubmitFormButton>
      </form>

      <p style={{ textAlign: "center", marginTop: "15px" }}>{message}</p>
    </>
  );
};

export default AddUserForm;

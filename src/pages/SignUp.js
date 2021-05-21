import { useToast } from "@chakra-ui/toast";
import axios from "axios";
import React, { useReducer } from "react";
import { Link } from "react-router-dom";
import { useUserData } from "../Context-Reducer/UserDatacontext";
export default function SignUp() {
  const { setUser } = useUserData();
  const [state, dispatch] = useReducer(
    (state, action) => {
      return { ...state, [action.type]: action.payload };
    },
    {
      name: null,
      email: null,
      password: null,
    }
  );

  const toast = useToast();
  // const { response , apiCall } = useAxios();
  return (
    <div>
      <h1>SignUp User</h1>
      <form>
        <label>Enter Name</label>
        <input
          required
          type="name"
          placeholder="Enter Name"
          onChange={(e) => dispatch({ type: "name", payload: e.target.value })}
        />
        <br />
        <label>Enter Email</label>
        <input
          required
          type="email"
          placeholder="Enter Email"
          onChange={(e) => dispatch({ type: "email", payload: e.target.value })}
        />
        <br />
        <label>Create Password</label>
        <input
          required
          type="password"
          placeholder="Password"
          onChange={(e) =>
            dispatch({ type: "password", payload: e.target.value })
          }
        />
        <br />
        <button
          onClick={async (e) => {
            e.preventDefault();

            const response = await axios.post(
              "https://Terrarium-Backend.nadaafarook.repl.co/users/signup",
              state
            );

            if (response.data.success === true) {
              setUser({
                name: response.data.Newuser.name,
                email: response.data.Newuser.email,
                id: response.data.Newuser._id,
              });
              toast({
                title: "User added successfully",
                status: "success",
                duration: 3000,
                isClosable: true,
              });
            } else {
              toast({
                title: "Error in adding a user",
                status: "error",
                duration: 3000,
                isClosable: true,
              });
            }
          }}
        >
          Submit
        </button>
      </form>
      <p>
        Already a user ? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}

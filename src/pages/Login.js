import { useToast } from "@chakra-ui/toast";
import React, { useReducer } from "react";
import { Link } from "react-router-dom";
import { useUserData } from "../Context-Reducer/UserDatacontext";
import axios from "axios";
const Login = () => {
  const { setUser } = useUserData();
  const toast = useToast();
  const [state, dispatch] = useReducer(
    (state, action) => {
      return { ...state, [action.type]: action.payload };
    },
    {
      email: null,
      password: null,
    }
  );
  return (
    <div className="Login">
      <Link to="/">Home</Link>
      <h1>Login User</h1>
      <form>
        <label>Enter Email</label>
        <input
          type="text"
          placeholder="Enter Email"
          onClick={(e) => dispatch({ type: "email", payload: e.target.value })}
        />
        <br />
        <label>Enter Password</label>
        <input
          type="password"
          placeholder="Enter Password"
          onClick={(e) =>
            dispatch({ type: "password", payload: e.target.value })
          }
        />
        <br />
        <button
          onClick={async (e) => {
            e.preventDefault();

            const response = await axios.post(
              "https://Terrarium-Backend.nadaafarook.repl.co/users/login",
              state
            );

            if (response.data.success === true) {
              setUser({
                name: response.data.user.name,
                email: response.data.user.email,
                id: response.data.user._id,
              });
              toast({
                title: "User logined successfully",
                status: "success",
                duration: 3000,
                isClosable: true,
              });
            } else {
              toast({
                title: "Error in logging in",
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
        Not a user yet ? <Link to="/signup">SignUp</Link>
      </p>
    </div>
  );
};

export default Login;

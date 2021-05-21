import { CircularProgress } from "@chakra-ui/progress";
import { useToast } from "@chakra-ui/toast";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useUserData } from "../Context-Reducer/UserDatacontext";
export default function User() {
  const [data, setData] = useState({});
  const [loader, setLoader] = useState(true);
  const { user, setUser } = useUserData();
  const toast = useToast();

  useEffect(() => {
    const source = axios.CancelToken.source();
    const fetchData = async () => {
      const result = await axios(
        "https://Terrarium-Backend.nadaafarook.repl.co/user/" + user.id,
        { cancelToken: source.token }
      );

      if (result.data.success === true) {
        setData({ ...result.data.user });
        setLoader(false);
      } else {
        setLoader(false);
        toast({
          title: "Error in fetching user . Please try again",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    };
    fetchData();
    return () => {
      if (source) {
        source.cancel("Landing Component got unmounted");
      }
    };
  }, [user, toast]);

  return (
    <div>
      {loader ? <CircularProgress isIndeterminate color="green.300" /> : User()}

      {/* also have to add users addresses */}
    </div>
  );

  function User() {
    return (
      <div className="user">
        <h1>{data.name}</h1>
        <p>Email : {data.email}</p>
        <Link to="/cart">GO TO MY CART</Link>
        <button
          onClick={() => {
            setUser({});
          }}
        >
          LOG OUT
        </button>
      </div>
    );
  }
}

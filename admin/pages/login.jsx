import React, { useState } from "react";
import {useRouter} from 'next/router';
import axios from 'axios'
import { Box } from "@mui/material";
import Form from "../components/Form";

function Login() {
  const router = useRouter()
  const [userdata, setUserData] = useState({
    user_email: "",
    user_password: "",
  });

  const getData = (form_type1, user_val1, form_type2, user_val2) => {
    if (
      form_type1 === "email" &&
      form_type2 === "password" &&
      user_val1 !== "" &&
      user_val2 !== ""
    ) {
      setUserData({
        ...userdata,
        user_email: user_val1,
        user_password: user_val2,
      });

      axios
        .post("http://localhost:5000/login", userdata)
        .then((res) => {
          localStorage.setItem("response", JSON.stringify(res));
          router.push("/");
        });
    }
  };

  return (
    <div className="min-h-screen ">
      <Box className="bg-[#FFCEFE] h-[100vh] overflow-hidden ">
        <div
          className={`bg-[#FFE70B] min-h-[40vh] w-[53%] absolute translate-x-[50%] translate-y-[50%] border-2 border-black  transition ease-in-out delay-450 `}
        >
          <Form
            type1="email"
            type2="password"
            title="It's quiet secrent"
            subtitle="Make sure to enter correct information"
            value1="email"
            value2="password"
            name1="email"
            name2="password"
            onSubmit={getData}
          />
        </div>
      </Box>
    </div>
  );
}
export default Login;

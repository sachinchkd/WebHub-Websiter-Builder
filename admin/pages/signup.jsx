import React, { useEffect, useState } from "react";
import axios from "axios";
import Form from "../components/Form";
import { Box, Button } from "@mui/material";
import ThemeForm from "../components/landing_page/ThemeForm";
import UserSelectorForm from "../components/landing_page/UserSelectorForm";
import { useRouter } from "next/router";

function Signup() {
  const router = useRouter();

  const [trigger, setTrigger] = useState(0);
  const [userdata, setUserData] = useState({
    shopName: "",
    theme: "",
    user_fullname: "",
    user_phNo: "",
    user_email: "",
    user_password: "",
  });

  const getDataTheme = (user_val1, user_val2) => {
    if (user_val1 !== "" && user_val2 !== "") {
      setUserData({
        ...userdata,
        shopName: user_val1,
        theme: user_val2,
      });
      console.log(userdata);
      setTrigger((trigger) => trigger + 1);
    }
  };
  const getData = (form_type1, user_val1, form_type2, user_val2) => {
    if (
      form_type1 === "fullName" &&
      form_type2 === "number" &&
      user_val1 !== "" &&
      user_val2 !== ""
    ) {
      setUserData({
        ...userdata,
        user_fullname: user_val1,
        user_phNo: user_val2,
      });
      console.log(userdata);
      setTrigger((trigger) => trigger + 1);
    }
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
      console.log(userdata);
      setTrigger((trigger) => trigger + 1);
    }
  };
  useEffect(() => {
    console.log(trigger);
    if (trigger == 4) {
      axios
        .post("http://localhost:5000/register", userdata)
        .then((res) => {
          console.log(res);

          if (!res.ok) {
            alert(res.data);
            router.push("/signup");
          } else {
            console.log(res);
            alert("successfully registered");
            router.push("/login");
          }
        })
        .catch((err) => {
          console.log("la failed bhayo ta");
          alert("failed " + err);
        });
    }
  }, [trigger]);
  const clicked = (data) => {
    if (data) {
      setTrigger((trigger) => trigger - 1);
    }
  };

  const next = (data) => {
    if (data) {
      setTrigger((trigger) => trigger + 1);
    }
  };

  return (
    <div className="min-h-screen ">
      <Box className="bg-[#FFCEFE] h-[100vh] overflow-hidden ">
        <div
          className={`bg-[#FFE70B] min-h-[40vh] w-[53%] absolute translate-x-[50%]  translate-y-[50%] border-2 border-black ${trigger == 0 ? "block " : " hidden"
            } transition ease-in-out delay-450 `}
        >
          <UserSelectorForm onSubmit={next} />
        </div>
        <div
          className={`bg-[#FFE70B] min-h-[40vh] w-[53%] absolute translate-x-[50%]  translate-y-[50%] border-2 border-black ${trigger == 1 ? "block " : " hidden"
            } transition ease-in-out delay-450 `}
        >
          <ThemeForm onSubmit={getDataTheme} onClicked={clicked} />
        </div>

        <div
          className={`bg-[#FFE70B] min-h-[40vh] w-[53%] absolute translate-x-[50%] translate-y-[50%] border-2 border-black ${trigger == 2 ? "block " : "hidden"
            } transition ease-in-out delay-450`}
        >
          <Form
            type1="text"
            type2="number"
            title="Little about yourself."
            subtitle="It'll be easier to reach out you"
            value1="full name"
            value2="phone number"
            name1="fullName"
            name2="number"
            onSubmit={getData}
            onClicked={clicked}
          />
        </div>

        <div
          className={`bg-[#FFE70B] min-h-[40vh] w-[53%] absolute translate-x-[50%] translate-y-[50%] border-2 border-black  ${trigger == 3 ? "block " : "hidden"
            } transition ease-in-out delay-450 `}
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
            onClicked={clicked}
          />
        </div>
      </Box>
    </div>
  );
}

export default Signup;

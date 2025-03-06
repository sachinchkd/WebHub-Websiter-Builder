import Router from "next/router";
import React from "react";
import Header from "../components/header";
import Layout from "../components/layout";
import Table from "../components/table";

const Orders = () => {
  const handleClick = () => {
    Router.push("/addproduct");
  };
  return (
    <>
      <Layout>
        <Header Title="Orders" buttonTitle="Add Orders" onClick={handleClick} />
        <Table />
      </Layout>
    </>
  );
};

export default Orders;

import React from "react";
import "flowbite";

import Products from "../pages/products";

const ProductModal = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return <div></div>;
};

export default ProductModal;

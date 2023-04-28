import React, { useState } from "react";
import Header from "../components/header";
import Row from "../components/row";
import Modal from "react-modal";
import Table from "../components/table";
import Layout from "../components/layout";
import "flowbite";

const Products = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const [formValues, setFormValues] = useState({
    name: "",
    color: "",
    category: "",
    price: "",
  });

  const { name, color, category, price } = formValues;

  const [inputarr, setInputarr] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputarr([...inputarr, { name, color, category, price }]);
    setFormValues({ name: "", color: "", category: "", price: "" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleonDelte = (i) => {
    const deleteVal = [...formValues];
    deleteVal.splice(i, 1);
    setFormValues(deleteVal);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Layout>
        <Header
          Title="Products"
          buttonTitle="Add Products"
          onClick={openModal}
        />
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={{
            overlay: {
              width: "100%",
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(255, 255, 255, 0.75)",
            },
            content: {
              width: "40%",
              height: "40%",
              margin: "auto",
              position: "absolute",

              border: "1px solid #ccc",
              background: "#fff",
              overflow: "auto",
              WebkitOverflowScrolling: "touch",
              borderRadius: "4px",
              outline: "none",
              padding: "20px",
            },
          }}
        >
          <button onClick={closeModal} class="flex-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <div class="w-fit m-auto">
            <form
              class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
              onSubmit={handleSubmit}
            >
              <div class="mb-4">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="eg:clothing"
                >
                  Product Name
                </label>
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  value={formValues.name}
                  name="name"
                  onChange={handleChange}
                  // placeholder="eg:Clothing"
                />
              </div>
              <div class="mb-6">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="Category Image"
                >
                  Color
                </label>
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="color"
                  type="text"
                  value={formValues.color}
                  onChange={handleChange}
                  // placeholder="eg:Clothing"
                />
              </div>
              <div class="mb-6">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="Category Image"
                >
                  Category
                </label>
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  name="category"
                  value={formValues.category}
                  onChange={handleChange}
                  // placeholder="eg:Clothing"
                />
              </div>
              <div class="mb-6">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="Category Image"
                >
                  Price
                </label>
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="number"
                  value={formValues.price}
                  name="price"
                  onChange={handleChange}
                  // placeholder="eg:Clothing"
                />
              </div>
              <div class="flex items-end ">
                <button
                  class="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-1 px-3 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </Modal>

        <Table />

        <div>
          <div class="flex-1 ml-72  ">
            <table class="w-auto text-sm text-left text-gray-500 mt-10">
              {inputarr.map((info, ind) => (
                <>
                  <tr class="bg-white border-b" key={ind}>
                    <th scope="col" class="px-7 py-3 ">
                      {info.name}
                    </th>

                    <th scope="col" class="px-7 py-3  ">
                      {info.color}
                    </th>

                    <th scope="col" class="px-7 py-3 ">
                      {info.category}
                    </th>

                    <th scope="col" class="px-7 py-3 ">
                      {info.price}
                    </th>

                    <th scope="col" class="px-7 py-3 ">
                      <button onClick={() => handleonDelte(ind)}>x</button>
                    </th>
                  </tr>
                </>
              ))}
            </table>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Products;

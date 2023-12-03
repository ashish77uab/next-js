import axios from "axios";
import React from "react";
const getData = async (id) => {
  const { status, data, error } = await axios.get(
    `https://dummyjson.com/products/${id}`
  );

  return data;
};
const Page = async ({ params: { id } }) => {
  const product = await getData(id);
  return (
    <div className="py-4 px-4 bg-gray-700 m-10">
      {
        <div className="space-y-2">
          <div>
            <strong>Title:</strong> <span>{product.title}</span>
          </div>
          <div>
            <strong>Des:</strong> <span>{product.description}</span>
          </div>
          <div>
            <strong>rating:</strong> <span>{product.rating}</span>
          </div>
          <div>
            <strong>stock:</strong> <span>{product.stock}</span>
          </div>
        </div>
      }
    </div>
  );
};

export default Page;

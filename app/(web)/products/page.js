import axios from "axios";
import Link from "next/link";
import React from "react";

const getData = async () => {
  const { status, data, error } = await axios.get(
    `https://dummyjson.com/products`
  );

  return data;
};
const addProduct = async (formData) => {
  const { status, data, error } = await axios.post(
    `https://dummyjson.com/products/add`,
    formData
  );

  return data;
};
const Products = async () => {
  const product = await getData();

  return (
    <div className="p-6">
      <div className="grid grid-cols-4 gap-4 p-10">
        {product?.products?.map((item) => (
          <div key={item} className="p-6 rounded-md bg-gray-800">
            {item.id} <br />
            {item.title} <br /> {item.description} <br />
            <Link href={`/products/${item.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;

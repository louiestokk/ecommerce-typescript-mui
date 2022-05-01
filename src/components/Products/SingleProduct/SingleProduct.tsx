import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { selectProducts } from "../../../redux/products/productsSlice";
import { useAppSelector } from "../../../redux/hooks";

interface IItem {}

const SingleProduct: React.FC<IItem> = () => {
  const { id } = useParams();
  const products = useAppSelector(selectProducts);
  let item: IItem[];
  // item = products.filter((el) => el.id === id);

  return <div></div>;
};

export default SingleProduct;

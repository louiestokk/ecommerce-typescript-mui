import React, { useState, useEffect } from "react";
import { Grid, Box } from "@material-ui/core";
import { commerce } from "../../lib/commerce";
import Productdetails from "./ProductDetails/Productdetails";
import { useAppDispatch } from "../../redux/hooks";
import { addProducts } from "../../redux/products/productsSlice";
import { Oval } from "react-loader-spinner";

export type States = {
  products?: any[];
  url?: string;
  image?: string;
  name?: string;
  product?: string;
  price?: number;
  data?: any[];
  id?: string;
  key?: string;
  loading: boolean;
};
const Products: React.FC = () => {
  const [products, setproducts] = useState<States | null>(null);
  const dispatch = useAppDispatch();
  const fetchProducts = async () => {
    setproducts({ loading: true });
    try {
      const { data } = await commerce.products.list();
      setproducts({
        products: data,
        loading: false,
      });
      dispatch(addProducts(data));
    } catch (error) {}
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      {products?.loading && (
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Oval
            ariaLabel="loading-indicator"
            height={100}
            width={100}
            strokeWidth={5}
            color="blue"
            secondaryColor="green"
          />
        </Box>
      )}
      <Grid
        container
        spacing={4}
        alignItems="center"
        justifyContent="center"
        style={{ marginTop: "1rem" }}
      >
        {products?.products?.map((el) => (
          <Productdetails products={el} key={el.id} price={0} />
        ))}
      </Grid>
    </>
  );
};

export default Products;

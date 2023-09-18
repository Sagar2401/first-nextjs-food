"use client";
import { Box } from "@mui/material";
import React, { useState } from "react";
import styles from "./Recipes.module.css";
import Image from "next/image";
import ArrowCard from "../ArrowCard/ArrowCard";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/Store";
import { addToCart } from "@/Store/Cart/Slice";
interface Data {
  id: number;
  name: string;
  description: string;
  time: number;
  price: number;
  img: string;
  img2: string;
  populer: boolean;
}

const cate = ["Pizza", "Sides", "Chicken", "Dessert", "Drinks"];
const Recipes = () => {
  const { cartproducts } = useSelector((state: RootState) => state.cart);

  const { categorius } = useSelector((state: RootState) => state.restoData);
  const pizzaData: Data[] = categorius.pizzas;

  const [active, setActive] = useState<number>(0);

  const dispatch = useDispatch<AppDispatch>();

  function isProductInCart(productId: number) {
    return cartproducts?.some((item) => item?.id === productId);
  }

  return (
    <>
      <Box className={styles.headerwrap}>
        <Image src={"/Group-5.svg"} width={107} height={170} alt="no img" />
        <h1 className={styles.header}>Popular Recipes</h1>
        <Image src={"/Vector.svg"} width={70} height={170} alt="no img" />
      </Box>
      <Box className={styles.catwrap}>
        {cate.map((item, i) => {
          return (
            <div
              onClick={() => setActive(i)}
              className={`${styles.category} ${
                active === i && styles.selected
              }`}
              key={item}
            >
              {item}
            </div>
          );
        })}
      </Box>
      <Box className={`${styles.pizzawrap} hidescroll`}>
        {pizzaData.map((data, i) => {
          return (
            <ArrowCard
              onClick={() => dispatch(addToCart({ ...data, quantity: 1 }))}
              key={data.id}
              intoCart={isProductInCart(data.id)}
              {...data}
            />
          );
        })}
      </Box>
    </>
  );
};

export default Recipes;

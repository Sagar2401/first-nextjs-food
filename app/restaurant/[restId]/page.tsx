"use client";
import React, { useState } from "react";
import Navbar from "../../components/navbar";
import { Box, Button } from "@mui/material";
import styles from "./page.module.css";
import Image from "next/image";
import Card from "./components/Card";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/Store";
import { addToCart, decreaseQt, increaseQt } from "@/Store/Cart/Slice";
import { getQut, isProductInCart, isTimeInRange } from "@/app/utils";

type categoryType =
  | "pizzas"
  | "Classic Pizzas For Classic Maniacs"
  | "Garlic Breads"
  | "Lasagna"
  | "Desserts";

const Page = () => {
  const { cartproducts } = useSelector((state: RootState) => state.cart);
  const { categorius, data } = useSelector(
    (state: RootState) => state.restoData
  );
  const dispatch = useDispatch<AppDispatch>();

  const [active, setActive] = useState<categoryType>(
    Object.keys(categorius)[0] as categoryType
  );

  const category: categoryType[] = Object.keys(categorius) as categoryType[];
  return (
    <>
      <Navbar black={true} />

      <Box className={styles.imgwrap}>
        <Box className={styles.item0}>
          <Image
            className={styles.img1}
            src="/b2.png"
            height={220}
            width={889}
            alt="noimg"
          />
        </Box>
        <Box className={styles.item1}>
          <Image
            className={styles.img2}
            src="/b1.png"
            height={600}
            width={889}
            alt="noimg"
          />
        </Box>
        <Box className={styles.item2}>
          <Image
            src="/b3.png"
            height={220}
            width={889}
            className={styles.img1}
            alt="noimg"
          />
        </Box>
      </Box>

      <Box className={styles.datawrap}>
        <Box className={styles.restonamewrap}>
          <Image
            style={{ height: "220px" }}
            src={data.logo}
            height={220}
            width={220}
            alt="noimg"
          />
          <Box className={styles.namewrap}>
            <Box className={styles.boldname}>{data.name}</Box>
            <Box className={styles.lightname}>
              <Box className={styles.txtwrap}>
                {data.desc}{" "}
                <span>
                  Avrage Cost:{"  "}
                  <span className="text-black">{data.cost}</span>
                </span>
              </Box>
              <Box>{data.add}</Box>
              <Box>
                <span className="text-red-600">
                  {isTimeInRange(data.open, data.close) ? "Open Now" : "Closed"}{" "}
                </span>
                {data.open}am - {data.close}pm (Today)
              </Box>
            </Box>
            <Box className={styles.btnwrap}>
              <Button className="primary-btn">order online</Button>
              <Button className="secondry-btn">directions</Button>
              <Button className="secondry-btn">share</Button>
            </Box>
          </Box>
        </Box>
        <Box className={styles.mediumboldname}>Menu</Box>
        <Box className={styles.manuwrap}>
          {data.menu.map(({ type, img }, i) => {
            return (
              <Box key={i} className={styles.card}>
                <Image
                  style={{ height: "220px" }}
                  src={img}
                  height={220}
                  width={180}
                  alt="noimg"
                />
                <Box className={styles.menuname}>{type}</Box>
              </Box>
            );
          })}
        </Box>

        <Box className={`${styles.text} mt-12`}>Order Online</Box>

        <Box className={styles.productwrap}>
          <Box className={styles.sidebar}>
            {category.map((item, i) => (
              <Box
                key={i}
                className={`${active === item && "primary-btn"} ${
                  styles.sidebarItem
                }`}
                onClick={() => setActive(item)}
              >
                {item} ({categorius[`${item}`]?.length})
              </Box>
            ))}
          </Box>
          <Box className={styles.productlist}>
            <Box className={styles.catname}>{active}</Box>
            {categorius[`${active}`].map((prod: any) => {
              return (
                <Card
                  key={prod.id}
                  {...prod}
                  count={getQut(prod.id, cartproducts)}
                  intocart={isProductInCart(prod.id, cartproducts)}
                  onDes={() => dispatch(decreaseQt(prod.id))}
                  onInc={() => dispatch(increaseQt(prod.id))}
                  onClick={() => dispatch(addToCart({ ...prod, quantity: 1 }))}
                />
              );
            })}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Page;

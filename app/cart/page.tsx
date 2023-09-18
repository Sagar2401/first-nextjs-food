"use client";
import {
  clearCart,
  decreaseQt,
  increaseQt,
  removeFromCart,
} from "@/Store/Cart/Slice";
import Link from "next/link";
import Card from "./components/Card";
import styles from "./page.module.css";
import Alert from "./components/Alert";
import React, { useState } from "react";
import Navbar from "../components/navbar";
import { useRouter } from "next/navigation";
import Massage from "./components/HelperText";
import { AppDispatch, RootState } from "@/Store";
import { useDispatch, useSelector } from "react-redux";
import { Box, Snackbar, Button, Input, TextField } from "@mui/material";

const couponArray = [
  {
    coupon: "free50",
    value: 50,
  },
  {
    coupon: "free80",
    value: 80,
  },
  {
    coupon: "free100",
    value: 100,
  },
  {
    coupon: "free120",
    value: 120,
  },
];

const Page = () => {
  const { cartproducts } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const [open, setOpen] = React.useState(false);
  const [discount, setDiscount] = useState();
  const [pricedata, setPriceData] = useState({
    discount: 120,
    gstP: 8,
    delhivery_charge: 50,
    isCoupon: 3,
  });

  const subTotal = cartproducts.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);

  const handleClick = () => {
    setOpen(true);
    setTimeout(() => {
      router.push("/home", { scroll: false });
      dispatch(clearCart());
    }, 1000);
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const applyeCoupon = () => {
    const coupon = couponArray.find((item) => item.coupon === discount);
    if (coupon) {
      setPriceData({
        ...pricedata,
        discount: Number(coupon.value),
        isCoupon: 1,
      });
    } else {
      setPriceData({
        ...pricedata,
        isCoupon: 0,
        discount: 0,
      });
    }
  };

  return (
    <>
      <Navbar black />

      <Box className={styles.catname}> Your Cart</Box>

      <Box className={styles.cardswrap}>
        {cartproducts.length > 0 ? (
          <>
            <Box className={styles.cardwrap}>
              {cartproducts.map((data, i) => {
                return (
                  <Card
                    key={i}
                    {...data}
                    count={data.quantity}
                    onDes={() => dispatch(decreaseQt(data.id))}
                    onRemove={() => dispatch(removeFromCart(data.id))}
                    onInc={() => dispatch(increaseQt(data.id))}
                  />
                );
              })}
            </Box>
            <Box className={styles.pricewrap}>
              <Box className={styles.couponwrap}>
                {/* <input
                  id="discount"
                  type="number"
                  onChange={(e: any) => setDiscount(e.target.value)}
                  min={50}
                  max={120}
                /> */}
                <TextField
                  placeholder="Apply coupon code"
                  onChange={(e: any) => setDiscount(e.target.value)}
                  sx={{ width: "100%" }}
                  helperText={<Massage type={pricedata.isCoupon} />}
                />
                <Button
                  sx={{ width: "29%", height: "56px" }}
                  onClick={() => applyeCoupon()}
                  className="primary-btn"
                >
                  Apply
                </Button>
              </Box>
              <Box className={styles.boldname}>
                Sub Total :{" "}
                <span className="text-gray-400 text-end">
                  ₹ {subTotal.toFixed(2)}
                </span>
              </Box>
              <Box className={styles.boldname}>
                Delhivery charge :{" "}
                <span className="text-gray-400 ">
                  {" "}
                  ₹ {pricedata.delhivery_charge}
                </span>
              </Box>
              <hr className="border-dashed border-2" />
              <Box className={styles.boldname}>
                Discount :{" "}
                <span className="text-green-500 ">
                  - ₹ {pricedata.discount}
                </span>
              </Box>
              <Box className={styles.boldname}>
                GST :{" "}
                <span className="text-gray-500 ">
                  {" "}
                  ₹ {((subTotal * 8) / 100).toFixed(2)}
                </span>
              </Box>
              <hr className="border-dashed border-2" />
              <Box className={styles.boldname}>
                Total :{" "}
                <span className="text-gray-400 ">
                  {" "}
                  ₹{" "}
                  {(
                    subTotal +
                    pricedata.delhivery_charge +
                    (subTotal * 8) / 100 -
                    pricedata.discount
                  ).toFixed(2)}
                </span>
              </Box>
              <Button
                sx={{ width: "100%", marginTop: "29px" }}
                className="primary-btn"
                onClick={() => handleClick()}
              >
                Order Now
              </Button>
              <Button
                sx={{
                  width: "100%",
                  marginTop: "29px",
                }}
                className="error-btn "
                onClick={() => dispatch(clearCart())}
              >
                clear Cart
              </Button>
            </Box>
          </>
        ) : (
          <Box sx={{ width: "100%", textAlign: "center" }}>
            Your cart is empty!!
            <br />
            <Link href="/home">Back to Home</Link>
          </Box>
        )}
        <Snackbar
          open={open}
          autoHideDuration={5000}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          onClose={handleClose}
        >
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            🥳 your order hs been placed. you get your food shortly..
          </Alert>
        </Snackbar>
      </Box>
    </>
  );
};

export default Page;

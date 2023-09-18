"use client";
import { RootState } from "@/Store";
import { Box, Badge, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { isServer } from "../utils";

interface Props {
  black: boolean;
}

const Navbar: React.FC<Props> = ({ black }) => {
  const [cartLenth, setCartLength] = useState(0);
  const { cartproducts } = useSelector((state: RootState) => state.cart);

  useEffect(() => {
    if (isServer) {
      setCartLength(cartproducts.length || 0);
    }
  }, [isServer]);

  return (
    <>
      <Box className="navbar">
        <Typography
          className="header-text normal-text cursor-pointer"
          sx={{ color: "var(--primary-color)" }}
        >
          <Link href="/home">Noodletown</Link>
        </Typography>
        <Box className="menu-wrap">
          <Box
            className={`normal-text cursor-pointer ${
              black ? "text-black" : " text-white"
            }`}
          >
            <Link href="/categories">Menu</Link>
          </Box>
          <Box>
            <Link href="/cart">
              <Badge badgeContent={cartLenth} color="warning">
                <Image
                  className="cursor-pointer text-white"
                  src={black ? "/cart-black.svg" : "/cart.svg"}
                  alt="no image"
                  width={25}
                  height={25}
                />
              </Badge>
            </Link>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Navbar;

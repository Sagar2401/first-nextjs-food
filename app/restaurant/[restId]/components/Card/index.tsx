import { Box, Button } from "@mui/material";
import React from "react";
import styles from "./index.module.css";
import Image from "next/image";
import IncDec from "@/app/components/IncDec";

interface Product {
  name: string;
  description: string;
  price: number;
  img: string;
  onInc: () => void;
  onDes: () => void;
  intocart: boolean;
  count: number;
  onClick: () => void;
}

const Index: React.FC<Product> = ({
  img,
  description,
  intocart,
  name,
  price,
  onClick,
  count,
  onDes,
  onInc,
}) => {
  return (
    <Box className={styles.card}>
      <Image
        style={{ borderRadius: "16px" }}
        src={img}
        className={styles.img}
        width={180}
        height={180}
        alt="noimg"
      />
      <Box className={styles.detail}>
        <Box className={styles.header}> {name}</Box>
        <Box className={styles.desc}> {description}</Box>
        <Box className={styles.header}>₹ {price}</Box>
        {intocart ? (
          <IncDec onDes={onDes} onInc={onInc} count={count} />
        ) : (
          <Button className="primary-btn mt-4" onClick={onClick}>
            Add to cart
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default Index;

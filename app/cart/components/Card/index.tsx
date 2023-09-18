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
  count: number;
  onRemove: () => void;
  id: number;
}
const Index: React.FC<Product> = ({
  img,
  description,
  name,
  price,
  id,
  count,
  onDes,
  onRemove,
  onInc,
}) => {
  return (
    <Box className={styles.card}>
      <Image
        src={img}
        height={140}
        width={390}
        alt="noimf"
        className={styles.img}
      />

      <Box className={styles.namewrap}>
        <span className={styles.header}>{name} </span>
        <span className={"text-yellow-500"}>₹{price} </span>
      </Box>

      <Box className={styles.desc}>{description} </Box>
      <IncDec onDes={onDes} onInc={onInc} count={count} />

      <Button onClick={onRemove} className="primary-btn mt-5">
        {" "}
        Remove
      </Button>
    </Box>
  );
};

export default Index;

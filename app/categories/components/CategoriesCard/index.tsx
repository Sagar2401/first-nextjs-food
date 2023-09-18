import { Box } from "@mui/material";
import React from "react";
import styles from "./index.module.css";
import Image from "next/image";

interface Cate {
  id: number;
  name: string;
  onClick: () => void;
  img: string;
}

const Index: React.FC<Cate> = ({ img, name, onClick, id }) => {
  return (
    <Box className={styles.card} onClick={onClick}>
      <Image
        className={styles.img}
        alt="no-img"
        src={img}
        height={187}
        width={187}
      />
      <Box className={styles.text}>{name}</Box>
    </Box>
  );
};

export default Index;

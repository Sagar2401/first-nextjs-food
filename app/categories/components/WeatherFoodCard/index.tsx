import { Box } from "@mui/material";
import React from "react";
import styles from "./index.module.css";
import Image from "next/image";

interface Cate {
  id: number;
  name: string;
  time: number;
  img: string;
}

const Index: React.FC<Cate> = ({ img, name, id, time }) => {
  return (
    <Box className={styles.card}>
      <Image
        alt="no-img"
        className={styles.img}
        src={img}
        height={260}
        width={410}
      />
      <Box className={styles.textwrap}>
        <Box className={styles.text}>{name}</Box>
        <Box className={styles.time}>{time} Min</Box>
      </Box>
    </Box>
  );
};

export default Index;

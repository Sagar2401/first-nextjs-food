import { Box } from "@mui/material";
import React from "react";
import styles from "./index.module.css";
import Image from "next/image";

interface Resto {
  id: number;
  name: string;
  place: number;
  img: string;
}

const Index: React.FC<Resto> = ({ img, name, id, place }) => {
  return (
    <Box className={styles.card}>
      <Image
        alt="no-img"
        className={styles.img}
        src={img}
        height={530}
        width={410}
      />
      <Box className={styles.textwrap}>
        <Box className={styles.text}>{name}</Box>
        <Box className={styles.place}>{place} places near you</Box>
      </Box>
    </Box>
  );
};

export default Index;

import { Box } from "@mui/material";
import React from "react";
import MediaCard from "../Card/Card";
import styles from "./Section.module.css";
import Image from "next/image";
interface Data {
  id: number;
  title: string;
  desc: string;
  img: string;
}

const data: Data[] = [
  {
    title: "dinning out",
    id: 1,

    desc: "Explore curated lists of top restaurants",
    img: "/nuddle.png",
  },
  {
    title: "dinning out",
    id: 2,
    desc: "Explore curated lists of top restaurants",
    img: "/manchurian.png",
  },
  {
    title: "dinning out",
    id: 3,
    desc: "Explore curated lists of top restaurants",
    img: "/pancake.png",
  },
];
const dishData: Data[] = [
  {
    id: 1,
    title: "chicken noodles",
    desc: "Explore curated lists of top restaurants",
    img: "/c-nuddle.png",
  },
  {
    id: 2,
    title: "french fries",
    desc: "Explore curated lists of top restaurants",
    img: "/french-fries.png",
  },
  {
    id: 3,

    title: "avacado mint noodles",
    desc: "Explore curated lists of top restaurants",
    img: "/avo-nuddle.png",
  },
];
const SecondSection = () => {
  return (
    <Box className="second-sec">
      <Box className="second-sec-card-wrap">
        {data.map(({ title, desc, img }) => {
          return <MediaCard key={title} title={title} desc={desc} img={img} />;
        })}
      </Box>
      <Box className={styles.dishmainwrap}>
        <h2 className={styles.header}>our best delivered cuisines</h2>
        <h6 className={styles.desc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore
        </h6>

        <Box className={styles.dishwrap}>
          {dishData.map(({ id, img, title }, index) => {
            return (
              <>
                {index !== 0 && <span className={styles.line} />}
                <Box key={id} className={styles.dishcard}>
                  <Image src={img} alt={title} height={246} width={246} />
                  <h2 className={styles.dishtitle}>{title}</h2>
                </Box>
              </>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default SecondSection;

import { Box } from "@mui/material";
import React from "react";
import styles from "./ArrowCard.module.css";
import Image from "next/image";
import LocalMallIcon from "@mui/icons-material/LocalMall";
interface Pizza {
  id: number;
  name: string;
  description: string;
  time: number;
  price: number;
  img: string;
  img2: string;
  populer: boolean;
  onClick: () => void;
  intoCart: boolean;
}

const ArrowCard: React.FC<Pizza> = ({
  img2,
  populer,
  description,
  id,
  name,
  price,
  onClick,
  intoCart,
  time,
}) => {
  return (
    <>
      <Box
        sx={{
          position: "relative",
          width: "311px",
          height: "502px",
          minWidth: "311px",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="311"
          height="502"
          viewBox="0 0 311 502"
          fill="none"
          style={{ position: "absolute" }}
        >
          <path
            d="M1 15C1 7.26802 7.26802 1 15 1H296C303.732 1 310 7.26801 310 15V456.94C310 464.672 303.732 470.94 296 470.94H203.165C199.184 470.94 195.347 472.424 192.402 475.101L170.299 495.195C161.908 502.823 149.092 502.823 140.701 495.195L118.598 475.101C115.653 472.424 111.816 470.94 107.835 470.94H15C7.26802 470.94 1 464.672 1 456.94V15Z"
            fill="white"
            stroke="#ECEEF7"
            strokeWidth="2"
          />
        </svg>
        <Box
          sx={{
            position: "absolute",
            width: "311px",
            height: "502px",
            minWidth: "311px",
            zIndex: 10,
            display: "flex",
            flexDirection: "column",
            padding: "43px 18px 0 18px",
          }}
        >
          {populer && <span className={styles.populer}>Populer</span>}
          <Image
            className={styles.img}
            src={img2}
            alt={name}
            height={215}
            width={204}
          />
          <Box
            sx={{
              width: "100%",
              display: "flex",
              gap: "50px",
              justifyContent: "space-between",

              marginTop: "40px",
            }}
          >
            <span className={styles.name}>{name}</span>
            <span className={styles.time}>{time} mins</span>
          </Box>
          <span className={styles.desc}>{description}</span>
          <span className={styles.price}>{price} NGN</span>
          <LocalMallIcon
            onClick={onClick}
            style={{
              backgroundColor: intoCart ? "var(--primary-color)" : "",
              fill: intoCart ? "white" : "black",
            }}
            className={styles.icon}
          />
        </Box>
      </Box>
      {/* <Box sx={{ width: "310px" }} className={styles.cardwrap}>
        {populer && <span className={styles.populer}>Populer</span>}
        <Image
        className={styles.img}
          src={img}
          alt={name}
          height={215}
          width={204}
        />
        <Box
          sx={{
            width: "100%",
            display: "flex",
            gap: "50px",
            justifyContent: "space-between",

            marginTop: "40px",
          }}
        >
          <span className={styles.name}>{name}</span>
          <span className={styles.time}>{time} mins</span>
        </Box>
        <span className={styles.desc}>{desc}</span>
        <span className={styles.price}>{price} NGN</span>
        <LocalMallIcon className={styles.icon} />
      </Box> */}
    </>
  );
};

export default ArrowCard;

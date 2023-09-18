"use client";
import React from "react";
import Navbar from "../components/navbar";
import { Box } from "@mui/material";
import SearchBar from "../components/SearchBar";
import SecondSection from "./components/Section/SecondSection";
import Recipes from "./components/Section/Recipes";
import Image from "next/image";
import InstagramIcon from "@mui/icons-material/Instagram";
import Cities from "../../data/cities.json";
const socialimg: string[] = [
  "/p1.png",
  "/p2.png",
  "/p3.png",
  "/p4.png",
  "/p5.png",
  "/p6.png",
];

const page = () => {
  return (
    <>
      <Box className="header">
        <Box className="overlay">
          <Navbar black={false} />

          <Box className="header-text-wrap">
            <span className="main-header">noodletown</span>
            <span className="header-desc">discover best food around you</span>
          </Box>
          <SearchBar data={Cities} defaultValue={Cities[0].value} />
        </Box>
      </Box>
      <SecondSection />
      <Recipes />

      {/* --------------------Simple Banner--------------------------- */}

      <Box
        sx={{
          position: "relative",
          height: { lg: "475px", md: "475px", sm: "250px", xs: "250px" },
          marginTop: { lg: "175px", md: "175px", sm: "75px", xs: "75px" },
        }}
      >
        <Image src="/pizzabk.png" objectFit="contain" fill alt="noimg" />
        <span className={"large-txt"}>
          Fastest food{" "}
          <span style={{ color: "var(--primary-color)" }}>delivery </span>
          in the town
        </span>
      </Box>

      {/* --------------------Offer Banner--------------------------- */}
      <Box className="img-wrap">
        <Box className="item-0">
          <Image src="/ice-cream.png" height={260} width={575} alt="noimg" />
        </Box>
        <Box className="item-1">
          <Box className="overlay absolute p-0 h-full  rounded-xl"></Box>
          <Image
            src="/burger.png"
            style={{ height: "100%" }}
            height={260}
            width={575}
            alt="noimg"
          />
          <span className="buy-txt">Buy 2 get 1 free</span>
        </Box>
        <Box className="item-2">
          <Image src="/salad.png" height={260} width={575} alt="noimg" />
        </Box>
      </Box>

      {/* --------------------Social Banner--------------------------- */}

      <Box className="social-img-wrap">
        {socialimg.map((img, i) => {
          return (
            <Image
              key={img}
              className="social-img"
              src={img}
              height={397}
              width={413}
              alt="noimg"
            />
          );
        })}
        <Box className="social-overlay"></Box>
        <Box className="social-wrap">
          <Box className="social-text text-center">
            Follow Us On Instagram To See Pictures Taken By Our Customers
          </Box>
          <Box className="social-text text-center">
            <InstagramIcon sx={{ fontSize: { sm: "20px" } }} /> : @santorins
          </Box>
        </Box>
      </Box>
      {/* --------------------App Banner--------------------------- */}
      <Box className="app-banner">
        <Box className="download-txt-wrap">
          <Box className="download-txt">Download our app</Box>
          <Box className="flex justify-between gap-8">
            <Image
              src={"/playstore.png"}
              height={397}
              width={204}
              className="mt-2 rounded-br-xl	"
              alt="noimg"
            />
            <Image
              src={"/appstore.png"}
              height={397}
              width={204}
              className="mt-2 rounded-br-xl	"
              alt="noimg"
            />
          </Box>
        </Box>
        <Image
          src={"/mobile-app.png"}
          height={397}
          width={413}
          className="mt-2 dimg rounded-br-xl	"
          alt="noimg"
        />
      </Box>
    </>
  );
};

export default page;

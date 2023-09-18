"use client";
import { Box } from "@mui/material";
import { useRouter } from "next/navigation";
import allData from "../../data/categories.json";
import Card from "./components/CategoriesCard";
import CardTithText from "./components/CardwithText";
import FoodCard from "./components/WeatherFoodCard";
import Navbar from "../components/navbar";
import React from "react";

const Page = () => {
  const { foodData, restData, restaurantData } = allData;
  const router = useRouter();

  return (
    <div>
      <Navbar black={true} />
      <Box className="cate-header">Top brands for you</Box>
      <Box className="restorant-wrap">
        {restaurantData.map((item, i) => {
          return (
            <Card
              key={item.id}
              onClick={() => router.push(`/restaurant/${item.name}`)}
              {...item}
            />
          );
        })}
      </Box>
      <Box className="cate-header">food according to weather</Box>
      <Box className="food-wrap">
        {foodData.map((item, i) => {
          return <FoodCard key={item.id} {...item} />;
        })}
      </Box>
      <Box className="restorant-wrap last py-24">
        {restData.map((item, i) => {
          return <CardTithText key={item.id} {...item} />;
        })}
      </Box>
    </div>
  );
};

export default Page;

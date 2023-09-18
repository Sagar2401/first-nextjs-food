import { Box, Button } from "@mui/material";
import React from "react";
interface Message {
  type: number;
}
const Index: React.FC<Message> = ({ type }) => {
  return (
    <>
      {type === 1 && (
        <span className="text-green-600">Yey!! your coupon applied.</span>
      )}
      {type === 0 ? (
        <span className="text-red-600">Opps! Coupon not exist. </span>
      ) : (
        <span>Enter coupon code to get discount.</span>
      )}
    </>
  );
};

export default Index;

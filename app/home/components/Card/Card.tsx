import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styles from "./Card.module.css";

interface Props {
  img: string;
  title: string;
  desc: string;
}

const MediaCard: React.FC<Props> = ({ img, title, desc }) => {
  return (
    <Card className={styles.card}>
      <CardMedia sx={{ height: 126 }} image={img} title="green iguana" />
      <CardContent sx={{ height: 74 }}>
        <p className={styles.title}>{title}</p>
        <span className={styles.desc}>{desc}</span>
      </CardContent>
    </Card>
  );
};
export default MediaCard;

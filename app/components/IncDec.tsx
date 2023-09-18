import React from "react";
import styles from "./IncDec.module.css";
import { Box, Button } from "@mui/material";
interface Incdec {
  count: number;
  onInc: () => void;
  onDes: () => void;
}

const IncDec: React.FC<Incdec> = ({ count, onDes, onInc }) => {
  return (
    <div className={styles.btnwrap}>
      <Button onClick={onDes} className={styles.dec}>
        -
      </Button>
      {count}
      <Button onClick={onInc} className={styles.inc}>
        +
      </Button>
    </div>
  );
};

export default IncDec;

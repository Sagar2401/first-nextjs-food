import React, { useState } from "react";
import { Box, TextField, MenuItem, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

interface Dropdown {
  value: string;
  lable: string;
}

const SearchBar = ({
  data,
  defaultValue,
}: {
  data: Dropdown[];
  defaultValue: string;
}) => {
  const [value, setValue] = useState(defaultValue);
  return (
    <Box className="searchbar-wrap">
      <TextField
        size="small"
        className="border-0"
        select
        sx={{
          borderColor: "transparent",
          width: { lg: "20%", md: "20%", sm: "30%", xs: "30%" },
        }}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        {data.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.lable}
          </MenuItem>
        ))}
      </TextField>
      |
      <TextField
        size="small"
        placeholder="Search for restraunt, cuisine, place"
        id="outlined-start-adornment"
        sx={{ m: 1, width: { lg: "50%", md: "50%", sm: "70%", xs: "70%" } }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />{" "}
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

export default SearchBar;

"use client";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCookies } from "react-cookie";

interface User {
  email: string;
  password: string;
}

const userData: User = {
  email: "admin@gmail.com",
  password: "admin",
};

export default function Home() {
  const [cookies, setCookie] = useCookies(["isLogin"]);
  const [error, setError] = useState(false);

  const router = useRouter();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const enteredEmail = data.get("email");
    const enteredPassword = data.get("password");

    // Check if the entered email and password match the userData
    const isMatch =
      enteredEmail === userData.email && enteredPassword === userData.password;

    if (isMatch) {
      setCookie("isLogin", "true");
      router.push("/home", { scroll: false });
    } else {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 2000);
    }
  };

  return (
    <Container className="login" component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "var(--primary-color)" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box
          className="lg-form"
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{ mt: 1 }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            className="lg-field"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            className="lg-field"
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          {error && (
            <Box className={"text-sm text-red-600 capitalize"}>
              Invalid email or password
            </Box>
          )}
          <Button
            type="submit"
            className="primary-btn"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

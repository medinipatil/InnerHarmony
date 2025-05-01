import { styled } from "@mui/material/styles";
import MuiCard from "@mui/material/Card";
import {
  Box,
  Button,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { CheckBox } from "@mui/icons-material";
import Header from "./Header";
import React, { useState } from "react";
const Card = styled(MuiCard)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignSelf: "center",
  width: "100%",
  padding: theme.spacing(10),
  gap: theme.spacing(2),
  boxShadow:
    "hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px",
  [theme.breakpoints.up("sm")]: {
    width: "450px",
  },
}));

function SignInCard() {
   
  const [emailError, setEmailError] = React.useState(false);
  const [EmailErrorMessage, setEmailErrorMessage] = React.useState('');
  const [passwordError, setPasswordError] = React.useState(false);
  const [PasswordErrorMessage, setPasswordErrorMessage] = React.useState('');

  const validateInputs = () => {
    const email = document.getElementById('email') as HTMLInputElement;
    const password = document.getElementById('password') as HTMLInputElement;

    let isValid = true;

    if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
      setEmailError(true);
      setEmailErrorMessage('Please enter a valid email address.');
      isValid = false;
    } else {
      setEmailError(false);
      setEmailErrorMessage('');
    }

    if (!password.value || password.value.length < 6) {
      setPasswordError(true);
      setPasswordErrorMessage('Password must be at least 6 characters long.');
      isValid = false;
    } else {
      setPasswordError(false);
      setPasswordErrorMessage('');
    }

    return isValid;
  };

  return (
    <>
      <Header/>
      <Card variant="outlined" sx={{}}>
        <Box sx={{ display: { xs: "flex", md: "none" } }}></Box>

        <Typography
          component="h1"
          variant="h4"
          sx={{ width: "100%", fontSize: "clamp(2rem, 10vw, 2.15rem)" }}
        >
          Sign in
        </Typography>
        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            gap: 2,
          }}
        >
          <FormControl>
            <FormLabel htmlFor="email">Email</FormLabel>
            <TextField
              error={passwordError}
              helperText={PasswordErrorMessage}
              id="email"
              type="email"
              name="email"
              placeholder="your@email.com"
              autoComplete="email"
              autoFocus
              fullWidth
              variant="outlined"
            />
          </FormControl>
          <FormControl>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <FormLabel htmlFor="password">Password</FormLabel>
              <Link
                component="button"
                type="button"
                variant="body2"
                sx={{ alignSelf: "baseline", color: "#009E60" }}
              >
                Forgot your Password?
              </Link>
            </Box>
            <TextField
              error = {passwordError}
              helperText = {PasswordErrorMessage}
              name="password"
              placeholder="....."
              type="password"
              id="password"
              autoComplete="current-password"
              autoFocus
              fullWidth
              variant="outlined"
            />
          </FormControl>
          {/* <FormControlLabel
            control={<CheckBox value="remember" color="primary" />}
            label="Remember Me"
          /> */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              background: "linear-gradient(to right, #74C365, #009E60)",
              "&:hover": {
                background: "linear-gradient(to right, #3CB371, #6B8E23)",
                boxShadow: 6,
                transform: "scale(1.05)",
              },
            }}
            onClick={validateInputs}
          >
            Sign In
          </Button>
          <Typography sx={{ textAlign: "center" }}>
            Don&apos;t have an account?{" "}
            <span>
              <Link variant="body2" sx={{ alignSelf: "center", color: "#009E60" }}>
                Sign up
              </Link>
            </span>
          </Typography>
        </Box>
        <Divider>or</Divider>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Button fullWidth  sx={{color: "#009E60"}}>
            Sign in with Google
          </Button>
          <Button fullWidth sx={{color: "#009E60"}}>
            Sign in with Facebook
          </Button>
        </Box>
      </Card>
    </>
  );
}
export default SignInCard;

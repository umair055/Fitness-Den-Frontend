import { Box, Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";

const Exercise = () => {
  const Exercise = useSelector((state) => state.Excercise.SingleExcercise);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        minHeight: "100vh",
        pb: 10,
      }}
    >
      <Box sx={{ position: "absolute", top: 0, left: 5 }}>
        <NavLink to={"/view-workout-plan"}>
          <Typography
            color={"white"}
            fontFamily={"Comme, sans-serif"}
            sx={{ display: "flex", alignItems: "center", fontSize: "1.7vw" }}
          >
            <KeyboardDoubleArrowLeftIcon /> Back
          </Typography>
        </NavLink>
      </Box>
      <Typography
        fontSize={"5vw"}
        color={"white"}
        fontWeight={800}
        textAlign={"center"}
        my={4}
      >
        ToDo Exercise!
      </Typography>
      {Exercise.map((i) => (
        <Box
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(10px)",
            boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.1)",
            borderRadius: 3,
            display: "flex",
            justifyContent: "center",
            alignItems: windowWidth < 768 ? "" : "center",
            flexDirection: "column",
            gap: 1,
            zIndex: 10,
            p: 3,
            my: 2,
          }}
        >
          <Typography
            fontSize={windowWidth < 768 ? "5vw" : "1.4rem"}
            color={"white"}
            fontWeight={800}
            fontFamily={"Comme, sans-serif"}
          >
            Name: {i.Name}
          </Typography>
          <Typography
            fontSize={windowWidth < 768 ? "5vw" : "1.4rem"}
            color={"white"}
            fontWeight={800}
            fontFamily={"Comme, sans-serif"}
          >
            Number of Sets: {i.Sets}
          </Typography>
          <Typography
            fontSize={windowWidth < 768 ? "5vw" : "1.4rem"}
            color={"white"}
            fontWeight={800}
            fontFamily={"Comme, sans-serif"}
          >
            Number of Repititions: {i.Reps}
          </Typography>
          <NavLink target="_blank" to={i.DemoLink}>
            <Typography
              fontSize={windowWidth < 768 ? "5vw" : "1.4rem"}
              color={"white"}
              fontFamily={"Comme, sans-serif"}
            >
              Demo: {i.DemoLink}
            </Typography>
          </NavLink>
        </Box>
      ))}
    </Container>
  );
};

export default Exercise;

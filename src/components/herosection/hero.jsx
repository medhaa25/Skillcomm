import { useState } from "react";
import "./hero.scss";
import Header from "../header/header";
import Footer from "../Footer/Footer";
import Category from "../Category/category";
import Sort from "../Sort/sort";
import { Grid, useMediaQuery } from "@mui/material";
import GridArea from "../Grid/Grid";
import workersData from "../WorkerCard/WorkerData";

const Hero = () => {
  const [filteredWorkers, setFilteredWorkers] = useState(workersData);
  const [sortOption, setSortOption] = useState("relevance");
  const isSmallScreen = useMediaQuery("(max-width:599px)");

  const sortWorkers = (workers) => {
    switch (sortOption) {
      case "rating":
        return [...workers].sort((a, b) => b.rating - a.rating);
      case "lowToHigh":
        return [...workers].sort((a, b) => a.charges - b.charges);
      case "highToLow":
        return [...workers].sort((a, b) => b.charges - a.charges);
      default:
        return workers;
    }
  };

  const sortedWorkers = sortWorkers(filteredWorkers);

  return (
    <>
      <Header />
      <section className="hero">
        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Grid item xs={isSmallScreen ? 6 : 12}>
            <Category setFilteredWorkers={setFilteredWorkers} />{" "}
          </Grid>
          <Grid item xs={isSmallScreen ? 6 : 12}>
            <Sort setSortOption={setSortOption} />
          </Grid>
        </Grid>
        <GridArea workers={filteredWorkers} sortedWorkers={sortedWorkers} />{" "}
      </section>
      <Footer />
    </>
  );
};

export default Hero;

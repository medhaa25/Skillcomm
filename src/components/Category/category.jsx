import { useState } from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import workersData from "../WorkerCard/WorkerData";
import PropTypes from "prop-types";

function Category({ setFilteredWorkers }) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleClick = (category) => {
    if (category === "Show All") {
      setSelectedCategories([]);
      setFilteredWorkers(workersData);
      return;
    }

    const isSelected = selectedCategories.includes(category);
    const newSelectedCategories = isSelected
      ? selectedCategories.filter((cat) => cat !== category)
      : [...selectedCategories, category];

    setSelectedCategories(newSelectedCategories);

    const filtered = newSelectedCategories.length
      ? workersData.filter((worker) =>
          newSelectedCategories.includes(worker.profession)
        )
      : workersData;

    setFilteredWorkers(filtered);
  };

  const chipData = [
    "Show All",
    "Plumber",
    "Electrician",
    "Carpenter",
    "Painter",
    "Gardener",
    "Cleaner",
    "Mechanic",
    "Appliance Repair",
    "Locksmith",
    "Pest Control",
    "Flooring Expert",
    "Movers",
    "IT Support",
  ];

  return (
    <>
      {isSmallScreen ? (
        <Accordion
          sx={{
            backgroundColor: "#f7f8f3",
            border: "1px solid #B2B5B2",
            boxShadow: "none",
          }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography sx={{ fontFamily: "inherit" }}>
              Select Service
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Stack
              direction="row"
              spacing={1}
              flexWrap="wrap"
              sx={{ gap: "10px 0" }}
            >
              {chipData.map((category, index) => (
                <Chip
                  key={index}
                  label={category}
                  onClick={() => handleClick(category)}
                  sx={{
                    my: 1,
                    fontSize: {
                      xs: "0.8rem",
                      sm: "1rem",
                      md: "1rem",
                      lg: "1rem",
                    },
                    backgroundColor:
                      selectedCategories.includes(category) ||
                      (category === "Show All" && !selectedCategories.length)
                        ? "#658a3f"
                        : "#e0e0e0",
                    color:
                      selectedCategories.includes(category) ||
                      (category === "Show All" && !selectedCategories.length)
                        ? "white"
                        : "black",
                    "&:hover": {
                      backgroundColor:
                        selectedCategories.includes(category) ||
                        (category === "Show All" && !selectedCategories.length)
                          ? "#658a3f"
                          : "#bdbdbd",
                    },
                  }}
                />
              ))}
            </Stack>
          </AccordionDetails>
        </Accordion>
      ) : (
        <Stack
          direction="row"
          spacing={1}
          flexWrap="wrap"
          sx={{
            gap: "10px 0",
            marginTop: 2,
          }}
        >
          {chipData.map((category, index) => (
            <Chip
              key={index}
              label={category}
              onClick={() => handleClick(category)}
              sx={{
                my: 1,
                fontSize: {
                  xs: "0.8rem",
                  sm: "1rem",
                  md: "1rem",
                  lg: "1rem",
                },
                backgroundColor:
                  selectedCategories.includes(category) ||
                  (category === "Show All" && !selectedCategories.length)
                    ? "#658a3f"
                    : "#e0e0e0",
                color:
                  selectedCategories.includes(category) ||
                  (category === "Show All" && !selectedCategories.length)
                    ? "white"
                    : "black",
                "&:hover": {
                  backgroundColor:
                    selectedCategories.includes(category) ||
                    (category === "Show All" && !selectedCategories.length)
                      ? "#658a3f"
                      : "#bdbdbd",
                },
              }}
            />
          ))}
        </Stack>
      )}
    </>
  );
}

Category.propTypes = {
  setFilteredWorkers: PropTypes.func.isRequired,
};

export default Category;

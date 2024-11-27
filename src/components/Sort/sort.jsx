import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
function Sort({ setSortOption }) {
  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  return (
    <div className="sort">
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          minWidth: 250,
          marginTop: 2,
          marginRight: 5,
        }}
      >
        <FormControl fullWidth variant="outlined">
          <InputLabel sx={{ fontFamily: "inherit" }}>Sort By</InputLabel>
          <Select
            onChange={handleSortChange}
            label="Sort By"
            sx={{ fontFamily: "inherit" }}
          >
            <MenuItem value="relevance" sx={{ fontFamily: "inherit" }}>
              Relevance
            </MenuItem>
            <MenuItem value="rating" sx={{ fontFamily: "inherit" }}>
              Rating
            </MenuItem>
            <MenuItem value="lowToHigh" sx={{ fontFamily: "inherit" }}>
              Charges: Low to High
            </MenuItem>
            <MenuItem value="highToLow" sx={{ fontFamily: "inherit" }}>
              Charges: High to Low
            </MenuItem>
          </Select>
        </FormControl>
      </Box>
    </div>
  );
}

Sort.propTypes = {
  setSortOption: PropTypes.func.isRequired,
};

export default Sort;

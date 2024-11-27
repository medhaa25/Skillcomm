import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
function WorkerCard({ id, name, profession, rating, charges, image }) {
  const navigate = useNavigate();

  const handleDetailsClick = () => {
    navigate(`/worker-details/${id}`);
  };

  const handleScheduleClick = () => {
    navigate(`/schedule-appointment/${id}`);
  };

  return (
    <Card sx={{ maxWidth: 330, margin: "1rem", boxShadow: 3, borderRadius: 4 }}>
      <CardMedia
        component="img"
        height="200"
        image={image}
        alt={`${name} profile picture`}
      />

      <CardContent>
        <Typography variant="h6" component="div" sx={{ fontFamily: "inherit" }}>
          {name}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ fontFamily: "inherit" }}
        >
          {profession}
        </Typography>

        <Box display="flex" alignItems="center" mt={1}>
          <Rating value={rating} precision={0.5} readOnly />
          <Typography variant="body2" ml={1} sx={{ fontFamily: "inherit" }}>
            ({rating})
          </Typography>
        </Box>

        <Typography variant="body1" mt={1} sx={{ fontFamily: "inherit" }}>
          ₹{charges}/hour
        </Typography>
      </CardContent>

      <Box display="flex" justifyContent="space-around" px={2} pb={2} gap={2}>
        <Button
          variant="outlined"
          sx={{
            fontFamily: "inherit",
            width: "100%",
            border: "1.5px solid #658a3f",
            color: "#658a3f",
            "&:hover": {
              border: "1.5px solid #658a3f",
              color: "#658a3f",
              backgroundColor: "transparent",
            },
          }}
          onClick={handleDetailsClick}
        >
          Details
        </Button>
        <Button
          variant="contained"
          sx={{
            fontFamily: "inherit",
            width: "100%",
            backgroundColor: "#658a3f",
            "&:hover": {
              backgroundColor: "#4a6b2e",
            },
          }}
          onClick={handleScheduleClick}
        >
          Schedule
        </Button>
      </Box>
    </Card>
  );
}

WorkerCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  profession: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  charges: PropTypes.number.isRequired,
  image: PropTypes.any.isRequired,
};

export default WorkerCard;

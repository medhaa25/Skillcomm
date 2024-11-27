import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Rating,
  Button,
  Grid,
  CardMedia,
} from "@mui/material";
import workersData from "../WorkerCard/WorkerData";
import ReviewForm from "../Reviews/ReviewForm";
import ReviewsDisplay from "../Reviews/ReviewDisplay";
import Header from "../header/header";
import { useNavigate } from "react-router-dom";
function WorkerDetails() {
  const { id } = useParams();
  const [worker, setWorker] = useState(null);
  const [reviews, setReviews] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const foundWorker = workersData.find((w) => w.id === parseInt(id, 10));
    setWorker(foundWorker);
  }, [id]);

  const handleSubmitReview = (review) => {
    setReviews([...reviews, review]);
  };

  if (!worker) {
    return <Typography>Loading...</Typography>;
  }

  const handleBackButton = () => {
    navigate("/");
  };
  return (
    <>
      <Header />
      <Button
        sx={{
          backgroundColor: "#658a3f",
          "&:hover": {
            backgroundColor: "#4a6b2e",
          },
          color: "white",
          margin: "8rem 2rem 0 2rem",
          fontFamily: "inherit",
        }}
        onClick={handleBackButton}
      >
        Go Back
      </Button>
      <Box
        sx={{
          p: 4,
          paddingTop: "4rem",
          maxWidth: "100%",
        }}
      >
        <Grid container spacing={4}>
          <Grid item xs={12} md={5} padding={4}>
            <CardMedia
              component="img"
              height="350"
              image={worker.image}
              alt={`${worker.name} profile picture`}
              sx={{ borderRadius: 2, boxShadow: 2 }}
            />
          </Grid>

          <Grid item xs={12} md={7}>
            <Typography
              variant="h4"
              sx={{ fontWeight: "bold", mb: 2, fontFamily: "inherit" }}
            >
              {worker.name}
            </Typography>

            <Typography
              variant="subtitle1"
              color="textSecondary"
              sx={{ mb: 1, fontFamily: "inherit" }}
            >
              Profession: {worker.profession}
            </Typography>

            <Box display="flex" alignItems="center" sx={{ mb: 2 }}>
              <Rating value={worker.rating} precision={0.5} readOnly />
              <Typography variant="body1" sx={{ ml: 1, fontFamily: "inherit" }}>
                ({worker.rating})
              </Typography>
            </Box>

            <Typography
              variant="h5"
              color="primary"
              sx={{ mb: 3, fontFamily: "inherit" }}
            >
              ₹{worker.charges}/hour
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              <strong>Experience:</strong> {worker.experience}
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              <strong>Completed Jobs:</strong> {worker.completedJobs}
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              <strong>Phone Number:</strong> {worker.phoneNumber}
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#658a3f",
                "&:hover": {
                  backgroundColor: "#4a6b2e",
                },
                fontSize: "1rem",
                padding: "10px 20px",
                fontFamily: "inherit",
              }}
            >
              Schedule Now
            </Button>
          </Grid>
        </Grid>
        <ReviewsDisplay reviews={reviews} />
        <ReviewForm onSubmitReview={handleSubmitReview} />
      </Box>
    </>
  );
}

export default WorkerDetails;

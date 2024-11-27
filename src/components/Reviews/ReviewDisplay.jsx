import { Box, Typography, Rating, Grid, CardMedia } from "@mui/material";
import PropTypes from "prop-types";
function ReviewsDisplay({ reviews }) {
  if (reviews.length === 0) {
    return (
      <Typography
        sx={{ fontSize: "1.5rem", fontFamily: "inherit", margin: "2rem 0" }}
      >
        No reviews yet.
      </Typography>
    );
  }

  return (
    <Box
      sx={{
        mt: 4,
      }}
    >
      <Typography
        variant="h5"
        sx={{ mb: 2, fontFamily: "inherit", fontWeight: "600" }}
      >
        Customer Reviews
      </Typography>
      {reviews.map((review, index) => (
        <Box
          key={index}
          sx={{
            mb: 4,
            borderBottom: "1px solid #ddd",
            backgroundColor: "#ebf5e1",
            borderRadius: "10px",
            padding: " 0.5rem 1rem",
          }}
        >
          <Rating value={review.rating} readOnly sx={{ mb: 1 }} />
          <Typography variant="body1" sx={{ mb: 2, fontFamily: "inherit" }}>
            {review.review}
          </Typography>

          {review.images.length > 0 && (
            <Grid container spacing={2}>
              {review.images.map((image, imgIndex) => (
                <Grid item xs={4} key={imgIndex}>
                  <CardMedia
                    component="img"
                    height="100"
                    image={image}
                    alt={`review image ${imgIndex + 1}`}
                    sx={{ borderRadius: 2, boxShadow: 1 }}
                  />
                </Grid>
              ))}
            </Grid>
          )}
        </Box>
      ))}
    </Box>
  );
}

ReviewsDisplay.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      rating: PropTypes.number.isRequired,
      review: PropTypes.string.isRequired,
      images: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
};

export default ReviewsDisplay;

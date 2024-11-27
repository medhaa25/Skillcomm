import { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Rating,
  TextField,
  Grid,
  IconButton,
  CardMedia,
} from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import PropTypes from "prop-types";
function ReviewForm({ onSubmitReview }) {
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);
  const [images, setImages] = useState([]);

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    const fileURLs = files.map((file) => URL.createObjectURL(file));
    setImages([...images, ...fileURLs]);
  };

  const handleSubmit = () => {
    if (rating && review) {
      onSubmitReview({ rating, review, images });
      setReview("");
      setRating(0);
      setImages([]);
    } else {
      alert("Please fill in both the rating and review.");
    }
  };

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h5" sx={{ mb: 2, fontFamily: "inherit" }}>
        Leave a Review
      </Typography>
      <Box display="flex" alignItems="center" sx={{ mb: 2 }}>
        <Rating
          value={rating}
          precision={0.5}
          onChange={(event, newValue) => setRating(newValue)}
        />
      </Box>
      <TextField
        fullWidth
        multiline
        rows={4}
        label="Write your review"
        variant="outlined"
        value={review}
        onChange={(e) => setReview(e.target.value)}
        sx={{ mb: 2, fontFamily: "inherit" }}
      />
      <Box>
        <input
          accept="image/*"
          id="icon-button-file"
          type="file"
          multiple
          style={{ display: "none" }}
          onChange={handleImageUpload}
        />
        <label htmlFor="icon-button-file">
          <IconButton color="primary" component="span">
            <PhotoCamera />
          </IconButton>
          Upload Pictures
        </label>
      </Box>
      {images.length > 0 && (
        <Grid container spacing={2} sx={{ mt: 2 }}>
          {images.map((image, index) => (
            <Grid item key={index} xs={4}>
              <CardMedia
                component="img"
                height="100"
                image={image}
                alt={`uploaded review ${index + 1}`}
                sx={{ borderRadius: 2, boxShadow: 1 }}
              />
            </Grid>
          ))}
        </Grid>
      )}

      <Button
        variant="contained"
        onClick={handleSubmit}
        sx={{ mt: 2, backgroundColor: "#658a3f", fontFamily: "inherit" }}
      >
        Submit Review
      </Button>
    </Box>
  );
}

ReviewForm.propTypes = {
  onSubmitReview: PropTypes.func.isRequired,
};

export default ReviewForm;

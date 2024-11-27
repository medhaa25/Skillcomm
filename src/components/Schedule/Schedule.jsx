import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Card,
  Snackbar,
  Alert,
} from "@mui/material";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useState } from "react";
import { useParams } from "react-router-dom";
import workersData from "../WorkerCard/WorkerData";

function ScheduleAppointment() {
  const { id } = useParams();
  const worker = workersData.find((w) => w.id === parseInt(id, 10));

  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const [description, setDescription] = useState("");
  const [userName, setUserName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [address, setAddress] = useState("");
  const [notification, setNotification] = useState({
    open: false,
    message: "",
  });
  const [isScheduled, setIsScheduled] = useState(false); // Toggle for form visibility

  const handleSchedule = () => {
    if (!date || !time || !userName || !contactNumber || !address) {
      setNotification({
        open: true,
        message: "Please fill all the required fields!",
      });
      return;
    }

    setNotification({
      open: true,
      message: `Scheduled ${
        worker.name
      } on ${date?.toLocaleDateString()} at ${time?.toLocaleTimeString()}.`,
    });
    setIsScheduled(true); // Hide the form after scheduling
  };

  const handleCloseNotification = (_, reason) => {
    if (reason === "clickaway") return;
    setNotification({ open: false, message: "" });
  };

  if (!worker) {
    return <Typography>Worker not found.</Typography>;
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box sx={{ p: 4, maxWidth: "800px", margin: "0 auto" }}>
        {isScheduled ? (
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
              backgroundColor: "white",
              p: 4,
              boxShadow: 3,
              borderRadius: 2,
            }}
          >
            <Typography variant="h5" sx={{ mb: 2, fontFamily: "inherit" }}>
              Appointment Confirmed!
            </Typography>
            <Typography>
              You have scheduled an appointment with {worker.name} on{" "}
              {date?.toLocaleDateString()} at {time?.toLocaleTimeString()}.
            </Typography>
          </Box>
        ) : (
          <Card sx={{ p: 3, boxShadow: 3, borderRadius: 2 }}>
            <Typography variant="h4" sx={{ mb: 4, fontFamily: "inherit" }}>
              Schedule Appointment with {worker.name}
            </Typography>
            <Grid container spacing={3}>
              {/* User Name */}
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Your Name"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  required
                />
              </Grid>

              {/* Contact Number */}
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Contact Number"
                  value={contactNumber}
                  onChange={(e) => setContactNumber(e.target.value)}
                  required
                />
              </Grid>

              {/* Address */}
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </Grid>

              {/* Date Picker */}
              <Grid item xs={12} md={6}>
                <DatePicker
                  label="Select Date"
                  value={date}
                  onChange={(newDate) => setDate(newDate)}
                  renderInput={(params) => <TextField fullWidth {...params} />}
                />
              </Grid>

              {/* Time Picker */}
              <Grid item xs={12} md={6}>
                <TimePicker
                  label="Select Time"
                  value={time}
                  onChange={(newTime) => setTime(newTime)}
                  renderInput={(params) => <TextField fullWidth {...params} />}
                />
              </Grid>

              {/* Description */}
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Description (optional)"
                  multiline
                  rows={3}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </Grid>

              {/* Confirm Button */}
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  sx={{
                    width: "100%",
                    backgroundColor: "#658a3f",
                    "&:hover": {
                      backgroundColor: "#4a6b2e",
                    },
                  }}
                  onClick={handleSchedule}
                >
                  Confirm Appointment
                </Button>
              </Grid>
            </Grid>
          </Card>
        )}
      </Box>

      <Snackbar
        open={notification.open}
        autoHideDuration={4000}
        onClose={handleCloseNotification}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseNotification}
          severity={
            notification.message.includes("Please fill") ? "error" : "success"
          }
          sx={{ width: "100%" }}
        >
          {notification.message}
        </Alert>
      </Snackbar>
    </LocalizationProvider>
  );
}

export default ScheduleAppointment;

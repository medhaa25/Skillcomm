import CircularProgress from "@mui/material/CircularProgress";
import "../herosection/hero.scss";
function Loading() {
  return (
    <div className="loading-screen">
      <div className="loading-text">Local Skills for Local Needs</div>
      <CircularProgress size={40} color="secondary" />
    </div>
  );
}

export default Loading;

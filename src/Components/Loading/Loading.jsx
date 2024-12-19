import { CircularProgress } from "@mui/material";

const Loading = () => {
  return (
    <CircularProgress
      size={"5rem"}
      thickness={3}
      sx={{ position: "fixed", top: "0%", left: "calc(100% - 5rem)" }} // left: "calc(50% - 2.5rem)" }}
    />
  );
};

export default Loading;

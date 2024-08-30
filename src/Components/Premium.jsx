import { useTheme } from "@emotion/react";
import { Box, Button, List, Typography } from "@mui/material";

function Premium() {
  const theme = useTheme();
  const borderColor = theme.palette.mode === "dark" ? "#272727" : "#eee";
  return (
    <div>
      <Box
        className=" border-2  mt-4  rounded-xl px-3 py-1"
        sx={{ borderColor: borderColor }}
      >
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <Typography variant="h6" gutterBottom className=" font-bold">
            Subscribe to Premium
          </Typography>
          <Typography variant="p" gutterBottom className="">
            Subscribe to unlock new features and if eligible, receive a share of
            ads revenue.
          </Typography>
          <Button
            variant="contained"
            sx={{
              display: "block",
              paddingInline: "15px",
              borderRadius: "20px",
              marginTop: "10px",
              fontSize: "12px",
              backgroundColor: "#1DA1F2",
              color: "white",
              fontWeight: "bold",
            }}
          >
            Subscribe
          </Button>
        </List>
      </Box>
    </div>
  );
}

export default Premium;

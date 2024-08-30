import { useTheme } from "@emotion/react";
import { Stack, Typography } from "@mui/material";

function Header() {
  const theme = useTheme();
  const borderColor = theme.palette.mode === "dark" ? "#272727" : "#eee";
  return (
    <header>
      <Stack
        direction={"row"}
        justifyContent={"space-around"}
        className="px-3 pt-2 border   text-sm"
        sx={{ borderColor: borderColor }}
      >
        <Typography
          variant="h6"
          component="h6"
          className="border-b-4 border-blue-500  "
        >
          For You
        </Typography>
        <Typography variant="h6" component="h6" className="text-[#777] text-xs">
          Following
        </Typography>
      </Stack>
    </header>
  );
}

export default Header;

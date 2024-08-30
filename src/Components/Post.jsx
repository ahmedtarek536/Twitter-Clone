import { useTheme } from "@emotion/react";
import {
  BarChartOutlined,
  BookmarkBorderOutlined,
  CachedOutlined,
  FavoriteBorder,
  FileDownloadOutlined,
  ModeCommentOutlined,
  MoreHoriz,
} from "@mui/icons-material";
import { Avatar, Box, Stack, Typography } from "@mui/material";

function Post() {
  const theme = useTheme();
  const borderColor = theme.palette.mode === "dark" ? "#272727" : "#eee";
  return (
    <Stack
      direction="row"
      spacing={2}
      className="border-b-2  p-4 pb-8"
      sx={{ borderColor: borderColor }}
    >
      <Avatar
        alt="Remy Sharp"
        src="https://mui.com/static/images/avatar/3.jpg"
      />
      <Box className=" w-full">
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Typography variant="p" component="p" className="font-bold">
            Sanchoy Hossain
            <span className="text-xs text-[#777]"> @sanchoyai · 23h</span>
          </Typography>
          <MoreHoriz className="text-[#777]" />
        </Stack>
        <Typography variant="p">
          𝐀𝐥𝐥 𝐏𝐚𝐢𝐝 𝐂𝐨𝐮𝐫𝐬𝐞𝐬 (𝐅𝐫𝐞𝐞 𝐟𝐨𝐫 𝐅𝐢𝐫𝐬𝐭 𝟓𝟎𝟎𝟎 𝐏𝐞𝐨𝐩𝐥𝐞)😍👇
          <br />
          <br />
          1. Artificial Intelligence
          <br />
          2. Machine Learning
          <br />
          3. Cloud Computing 4. Ethical Hacking
          <br />
          5. Data Analytics 6. AWS Certified
          <br />
          7. Data Science 8. BIG DATA
          <br />
          9. Python 10. MBA (48 Hours only ⏰)
        </Typography>
        <img
          src="https://pbs.twimg.com/media/GWHEhlza0AAd_yr?format=jpg&name=900x900"
          alt="img"
          className="my-2 rounded-3xl "
        />
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Box className="text-xs text-[#777]">
            <ModeCommentOutlined sx={{ fontSize: "20px" }} />
            <Typography variant="p">100</Typography>
          </Box>
          <Box className="text-xs text-[#777]">
            <CachedOutlined sx={{ fontSize: "20px" }} />
            <Typography variant="p">100</Typography>
          </Box>
          <Box className="text-xs text-[#777]">
            <FavoriteBorder sx={{ fontSize: "20px" }} />
            <Typography variant="p">100</Typography>
          </Box>
          <Box className="text-xs text-[#777]">
            <BarChartOutlined sx={{ fontSize: "20px" }} />
            <Typography variant="p">100</Typography>
          </Box>
          <Box className="text-xs text-[#777]">
            <BookmarkBorderOutlined sx={{ fontSize: "20px" }} />
            <FileDownloadOutlined sx={{ fontSize: "20px" }} />
          </Box>
        </Stack>
      </Box>
    </Stack>
  );
}

export default Post;

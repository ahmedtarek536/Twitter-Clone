import { useTheme } from "@emotion/react";
import {
  AccessAlarmOutlined,
  AddLocationOutlined,
  EmojiEmotionsOutlined,
  GifBoxOutlined,
  ImageOutlined,
} from "@mui/icons-material";
import { Avatar, Box, Button, Stack } from "@mui/material";

function CreatePost() {
  const theme = useTheme();
  const borderColor = theme.palette.mode === "dark" ? "#272727" : "#eee";
  return (
    <Stack
      direction="row"
      spacing={2}
      className="p-4 border-b"
      style={{ borderColor }}
    >
      <Avatar
        alt="Remy Sharp"
        src="https://mui.com/static/images/avatar/2.jpg"
      />
      <Box className="w-full">
        <input
          type="text"
          className="text-lg bottom-0 outline-none pt-1"
          placeholder="What is happening?!"
        />
        <Stack
          direction="row"
          justifyContent={"space-between"}
          alignItems={"center"}
          className="w-full mt-6"
        >
          <Stack direction={"row"} spacing={1}>
            <ImageOutlined sx={{ fontSize: "20px", color: "blue" }} />
            <GifBoxOutlined sx={{ fontSize: "20px", color: "blue" }} />
            <EmojiEmotionsOutlined sx={{ fontSize: "20px", color: "blue" }} />
            <AccessAlarmOutlined sx={{ fontSize: "20px", color: "blue" }} />
            <AddLocationOutlined sx={{ fontSize: "20px", color: "blue" }} />
          </Stack>
          <Button
            variant="contained"
            sx={{
              display: "block",
              paddingInline: "15px",
              borderRadius: "20px",
              marginTop: "10px",
              backgroundColor: "#1DA1F2",
              color: "white",
              fontWeight: "bold",
              fontSize: "12px",
            }}
          >
            Post
          </Button>
        </Stack>
      </Box>
    </Stack>
  );
}

export default CreatePost;

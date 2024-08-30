import { Box } from "@mui/material";
import Post from "./Post";
import CreatePost from "./CreatePost";

function Posts() {
  return (
    <Box>
      <CreatePost />
      <Post />
      <Post />
      <Post />
    </Box>
  );
}

export default Posts;

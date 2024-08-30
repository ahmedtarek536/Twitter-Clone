import { Search, SearchOff } from "@mui/icons-material";
import { InputBase, Stack } from "@mui/material";
import styled from "styled-components";

function SearchInput() {
  return (
    <div>
      <Stack direction="row" sx={{ position: "relative", marginTop: "20px" }}>
        <Search className="absolute top-2 left-4 text-[#777]"></Search>
        <input
          type="text"
          className="w-full border border-gray-400  rounded-full px-12 py-2"
          placeholder="Search"
        />
      </Stack>
    </div>
  );
}

export default SearchInput;

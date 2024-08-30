import { useTheme } from "@emotion/react";
import Header from "./Header";
import Posts from "./Posts";

function Content() {
  const theme = useTheme();
  const borderColor = theme.palette.mode === "dark" ? "#272727" : "#eee";

  return (
    <div
      className={`border  lg:mx-4 col-span-9 lg:col-span-6 ml-4 h-[100vh] overflow-auto`}
      style={{ borderColor: borderColor }}
    >
      <Header />
      <Posts />
    </div>
  );
}
export default Content;

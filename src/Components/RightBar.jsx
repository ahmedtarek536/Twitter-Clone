import Follower from "./Follower";
import Premium from "./Premium";
import SearchInput from "./SearchInput";
import Trending from "./Trending";

function RightBar() {
  return (
    <div className="col-span-2  lg:block hidden h-[100vh] overflow-auto pb-10">
      <SearchInput />
      <Premium />
      <Trending />
      <Follower />
    </div>
  );
}

export default RightBar;

import Foryoupage from "./ForyouPage";
import StoryIcon from "./StoryIcon";

const ContentPage = () => {
  return (
    <div className="w-[630px]">
      <div>
        <div className="flex pb-2">
          <span className="font-bold text-base mr-3">For you</span>
          <span className="font-bold text-base text-gray-300">Following</span>
        </div>
        <hr className="" />
      </div>
      <div>
        <StoryIcon></StoryIcon>
        <Foryoupage></Foryoupage>
      </div>
    </div>
  );
};

export default ContentPage;

import Foryoupage from "./ForyouPage";
import StoryIcon from "./StoryIcon";
import Link from "next/link";
import ChoosePageComponent from "./ChoosePageComponent";

const ContentPage = () => {

  return (
    <div className="w-[630px] mt-[10px]">
      <ChoosePageComponent></ChoosePageComponent>
      <hr />
      <div className="mt-[32px]"></div>
      <div>
        <StoryIcon></StoryIcon>
        <Foryoupage></Foryoupage>
      </div>
    </div >
  );
};

export default ContentPage;

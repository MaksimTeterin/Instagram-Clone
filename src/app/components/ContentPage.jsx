import Foryoupage from "./ForyouPage";
import StoryIcon from "./StoryIcon";
import Link from "next/link";
import ChoosePageComponent from "./ChoosePageComponent";

const ContentPage = () => {

  return (
    <div className="w-[630px] mt-[10px]">
      <ChoosePageComponent></ChoosePageComponent>
      <hr />
      <div className="mt-[20px]"></div>
      <div>
        <StoryIcon></StoryIcon>
        <div className="mt-[20px]"><Foryoupage></Foryoupage>
        </div>
      </div>
    </div >
  );
};

export default ContentPage;

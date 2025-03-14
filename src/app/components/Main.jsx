import React from "react";
import ContentPage from "./ContentPage";
import MainPageSideBar from "./MainPageSideBar";

const Main = () => {
  return (
    <div className="">
      <div className="flex w-full justify-center">
        <div className="w-[630px]">
          <ContentPage></ContentPage>
        </div>
        <div className="w-[319px] pl-[64px]">
          <MainPageSideBar></MainPageSideBar>
        </div>
      </div>
    </div>
  );
};

export default Main;

import React from "react";
import ContentPage from "./ContentPage";

const Main = () => {
  return (
    <div className="ml-[319.375px] p-8 w-screen">
      <div className="flex w-full justify-center">
        <div className="w-[630px]">
          <ContentPage></ContentPage>
        </div>
        <div className="w-[319px] pl-[64px]">
          <h1>Another side bar here</h1>
        </div>
      </div>
    </div>
  );
};

export default Main;

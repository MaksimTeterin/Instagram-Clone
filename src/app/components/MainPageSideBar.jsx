import { RxAvatar } from "react-icons/rx";
import SuggestedUserComponent from "./SuggestedUserComponent";
import ListOfLinksComponent from "./ListOfLinksComponent";
import ListOfLinks from "./ListOfLinks";

const MainPageSideBar = () => {
    return (
        <div className="flex flex-col items-center">
            <div className="flex flex-row items-center w-[287px]">
                <RxAvatar className="pr-[12px]" style={{ height: "44px", width: "44px" }} />
                <div className="flex flex-col justify-center">
                    <p className="font-semibold text-sm text-black">maxim.teterin</p>
                    <p className="font-normal text-sm text-gray-500">Максим</p>
                </div>
                <div className="ml-auto">
                    <button className="font-semibold text-xs text-sky-500 hover:text-blue-800">Switch</button>
                </div>
            </div>
            <div className="flex flex-row items-center w-[287px] mt-[24px]">
                <div className="flex flex-row items-center">
                    <p className="w-[230px] font-semibold text-sm text-gray-500 leading-[18px]">Suggested for you</p>
                    <button className="w-[57px] text-right font-semibold text-xs text-black hover:text-gray-500">See all</button>
                </div>
            </div>
            <div className="flex flex-col items-center w-[287px] pt-[8px] h-[320px]">
                <SuggestedUserComponent userName="dasdasfd" matchingFollowers="fjiafjaiwf" userImg="https://avatars.githubusercontent.com/u/15833579" ></SuggestedUserComponent>
                <SuggestedUserComponent userName="dasdasfd" matchingFollowers="fjiafjaiwf" userImg="https://avatars.githubusercontent.com/u/15833579" ></SuggestedUserComponent>
                <SuggestedUserComponent userName="dasdasfd" matchingFollowers="fjiafjaiwf" userImg="https://avatars.githubusercontent.com/u/15833579" ></SuggestedUserComponent>
                <SuggestedUserComponent userName="dasdasfd" matchingFollowers="fjiafjaiwf" userImg="https://avatars.githubusercontent.com/u/15833579" ></SuggestedUserComponent>
                <SuggestedUserComponent userName="dasdasfd" matchingFollowers="fjiafjaiwf" userImg="https://avatars.githubusercontent.com/u/15833579" ></SuggestedUserComponent>
            </div>
            <div className="mb-[16px]">
                <ListOfLinks></ListOfLinks>
            </div>
            <div className="w-[287px]">
                <span className="font-normal text-xs leading-[16px] text-gray-400 text-left">© 2025 Instagram from Meta</span>
            </div>

        </div>
    );
}

const SidebarIcon = ({ icon }) => <div className="sidebar-icon">{icon}</div>;


export default MainPageSideBar;
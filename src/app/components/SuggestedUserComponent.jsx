const exp = require("constants");

const SuggestedUserComponent = (props, suggestionType) => {
    return (
        <div className="w-[287px] flex flex-row justify-between py-[8px]">
            <div className="flex items-center">
                <span className="w-[56px]"><img className="h-[44px] rounded-full" src={props.userImg} alt="" />
                </span>
                <div className="flex flex-col">
                    <p className="font-semibold text-sm text-black">{props.userName}</p>
                    <p className="font-normal text-sm text-gray-500">{props.matchingFollowers}</p>
                </div>

            </div>
            <button className="font-semibold text-xs text-sky-500 hover:text-blue-800">Follow</button>
        </div>
    );
}
export default SuggestedUserComponent;
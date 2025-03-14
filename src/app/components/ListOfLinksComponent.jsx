import Link from "next/link";

const ListOfLinksComponent = (props) => {
    return (
        <div className="flex flex-row items-center hover:underline decoration-gray-400">
            <Link href={props.link}><span className="font-normal text-xs leading-[16px] text-gray-400">{props.text}</span></Link>
            {
                props.displaydot ? <li className="font-normal text-xs leading-[16px] text-gray-400 ml-[3px] mr-[3px] w-[3.5px]"></li> : (null)
            }
        </div>
    );
};
export default ListOfLinksComponent;
import ListOfLinksComponent from "./ListOfLinksComponent";

const ListOfLinks = (props) => {
    const element = [{ text: "About", link: "/about" }, { text: "Help", link: "/help" }, { text: "Press", link: "/press" }, { text: "API", link: "/api" }, { text: "Jobs", link: "/jobs" }, { text: "Privacy", link: "/privacy" }, { text: "Terms", link: "/terms" }, { text: "Locations", link: "/locations" }, { text: "Language", link: "/language" }, { text: "Meta verified", link: "/meta-verified" }];
    const listOfMappedElements = [];
    element.map((element) => {
        if (element.link === "/meta-verified") {
            listOfMappedElements.push(<ListOfLinksComponent text={element.text} link={element.link} displaydot={false}></ListOfLinksComponent>);
        } else {
            listOfMappedElements.push(<ListOfLinksComponent text={element.text} link={element.link} displaydot={true}></ListOfLinksComponent>);
        }
    });

    return (
        <div className="flex flex-row flex-wrap items-center w-[287px] pt-[8px]">
            {listOfMappedElements}
        </div>
    );
}
export default ListOfLinks;
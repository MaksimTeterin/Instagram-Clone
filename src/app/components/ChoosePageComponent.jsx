"use client"
import Link from "next/link";
import { useState } from "react";
import { useEffect } from "react";
import { usePathname } from 'next/navigation'


const ChoosePageComponent = () => {

    const router = usePathname()

    const [chosenPage, setChosenPage] = useState("");

    const getCurrentPage = () => {
        console.log(router)
        setChosenPage(router);
        return chosenPage;
    }

    useEffect(() => {
        getCurrentPage();
    }
        , []);

    return (
        <div>
            <div className="flex pb-2">
                {chosenPage === "/?variant=home" ? (
                    <div>
                        <Link href="/?variant=home" onClick={() => setChosenPage("/?variant=home")}><span className="font-bold text-base mr-3">For you</span></Link>
                        <Link href="/?variant=following" onClick={() => setChosenPage("/?variant=following")}><span className="font-bold text-base text-gray-300">Following</span></Link>
                    </div>
                ) : (
                    <div>
                        <Link href="/?variant=home" onClick={() => setChosenPage("/?variant=home")}><span className="font-bold text-base text-gray-300 mr-3">For you</span></Link>
                        <Link href="/?variant=following" onClick={() => setChosenPage("/?variant=following")}><span className="font-bold text-base ">Following</span></Link>
                    </div>
                )}
            </div>
            <hr className="" />
        </div>
    );
}
export default ChoosePageComponent;
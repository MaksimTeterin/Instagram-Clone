"use client";

import React, { useState } from 'react';

const Slider = ({ content }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const childrenArray = content[0].props.children;
    console.log(childrenArray); // Output: ['Child 1', 'Child 2']

    let usedcontent = childrenArray.slice(currentIndex, currentIndex + 8);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 8));
        console.log(currentIndex);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 8));
        console.log(currentIndex);
    };

    return (
        <div className="flex relative">
            <button onClick={prevSlide} className="text-xl absolute left-0 top-1/2 transform -translate-y-1/2">{currentIndex - 8 >= 0 ? '<' : ""}</button>
            <div className="flex">
                {usedcontent}
            </div>
            <button onClick={nextSlide} className="text-xl absolute right-0 top-1/2 transform -translate-y-1/2">{currentIndex + 8 < childrenArray.length ? '>' : ""}</button>
        </div>
    );
};

export default Slider;
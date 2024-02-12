import React from "react";
import { Typography } from "@material-tailwind/react";
import {
    Card,
    CardHeader,
    CardBody,

} from "@material-tailwind/react";
import Studies from "../../assets/image/Studies.jpg";
import University from "../../assets/image/study-1.jpg";
import Career from "../../assets/image/study-2.jpg";
import Knowledge from "../../assets/image/study-3.jpg";
import Support from "../../assets/image/study-4.jpg";
import Apply from "../../assets/image/study-5.jpg";
import Home from "../../assets/image/study-6.jpg";
import Chat from "../../assets/image/study-7.jpg";
import Fees from "../../assets/image/study-8.jpg";

const cardsData = [
    {
        title: "Why Choose University ?",
        image: University,
    },
    {
        title: "Careers Team",
        image:Career,
    },
    {
        title: "Knowledge",
        image: Knowledge,
    },
    {
        title: "Student Support",
        image: Support,
    },
];


const cardsDatas = [
    {
        titles: "How to Apply",
        images: Apply,
    },
    {
        titles: "find your new Home",
        images: Home,
    },
    {
        titles: "Chat with a Student",
        images: Chat,
    },
    {
        titles: "Fees and Funding",
        images: Fees,
    },
];
export default function Study() {
    return (
        <>
            <figure className="relative h-96 w-full">
                <img
                    className="h-full w-full rounded-none object-cover object-center"
                    src={Studies}
                    alt="Studies"
                />
                <figcaption className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
                    <Typography variant="h3" color="blue-gray text-center">
                        Study
                    </Typography>
                </figcaption>
            </figure>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-20">
                {cardsData.map((card, index) => (
                    <Card key={index} className="max-w-xs mx-auto my-5">
                        <CardHeader color="gray" contentPosition="top" >
                            <img src={card.image} alt={card.title} className="w-full" />
                        </CardHeader>
                        <CardBody className="text-center">
                            <Typography color="#263238" className="text-xl font-bold py-2">
                                {card.title}
                            </Typography>
                        </CardBody>
                    </Card>
                ))}
            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-20">
                {cardsDatas.map((card, index) => (
                    <Card key={index} className="max-w-xs mx-auto  my-5">
                        <CardHeader color="gray" contentPosition="top" >
                            <img src={card.images} alt={card.titles} className="w-full" />
                        </CardHeader>
                        <CardBody className="text-center">
                            <Typography color="#263238" className="text-xl font-bold py-2">
                                {card.titles}
                            </Typography>

                        </CardBody>
                    </Card>
                ))}
            </div>


        </>
    )
}
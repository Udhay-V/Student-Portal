import React from "react";
import './Home.css';
import {
    Card,
    CardHeader,
    CardBody,
} from "@material-tailwind/react";
import {
    Typography,
    Button,
} from "@material-tailwind/react";
import { Carousel } from "@material-tailwind/react";
import Video from "../../assets/video/UOL-Homepage-WEB.mp4";
import Campus from "../../assets/image/card-1.jpeg";
import StudentLife from "../../assets/image/card-2.jpeg";
import Accommodation from "../../assets/image/card-3.jpg";
import Sports from "../../assets/image/card-4.jpg";
import World from "../../assets/image/carosel-1.jpg";
import School from "../../assets/image/carosel-2.jpeg";
import House from "../../assets/image/carosel-3.jpg";

export default function Home() {
    return (
        <>
            {/* video */}
            <div className="video">
                <video className="h-full w-full" loop autoPlay muted>
                    <source src={Video} type="video/mp4" />
                </video>
            </div>

            {/* card */}
            <div className="container w-screen h-xl text-2xl mx-auto">
                <p className="c-intro_text">
                    Founded on the ideals of <em>inclusivity, diversity</em> and <em>collaboration</em>, the University of London is a pioneering institution committed to increasing access to <em>education</em>, championing <em>research excellence</em> and delivering <em>social good</em>.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 my-20 mx-10">

                <Card className="content-start max-w-[24rem] overflow-hidden">
                    <CardHeader
                        floated={false}
                        shadow={false}
                        color="transparent"
                        className="m-0 rounded-none"
                    >
                        <img
                            src={Campus}
                            alt="Campus"
                        />
                    </CardHeader>
                    <CardBody>
                        <Typography variant="h4" color="blue-gray" className="text-center">
                            Campus
                        </Typography>
                        <Typography variant="lead" color="gray" className="mt-3 font-normal">
                            “Our stunning campus is designed to be a compact, safe and stimulating place where you'll feel at home. Being a campus-based university in the city centre also means everything's easily accessible.”
                        </Typography>
                    </CardBody>
                </Card>

                <Card className="content-start max-w-[24rem] overflow-hidden">
                    <CardHeader
                        floated={false}
                        shadow={false}
                        color="transparent"
                        className="m-0 rounded-none"
                    >
                        <img
                            src={StudentLife}
                            alt="Student Life"
                        />
                    </CardHeader>
                    <CardBody>
                        <Typography variant="h4" color="blue-gray" className="text-center">
                            Student Life
                        </Typography>
                        <Typography variant="lead" color="gray" className="mt-3 font-normal">
                            “ Provide extra academic skills support to students. This includes essay writing, general written English, research skills, time management, verbal presentations, and exam preparation.”
                        </Typography>
                    </CardBody>

                </Card>
                <Card className="content-start max-w-[24rem] overflow-hidden">
                    <CardHeader
                        floated={false}
                        shadow={false}
                        color="transparent"
                        className="m-0 rounded-none"
                    >
                        <img
                            src={Accommodation}
                            alt="Accommodation"
                        />
                    </CardHeader>
                    <CardBody>
                        <Typography variant="h4" color="blue-gray" className="text-center">
                            Accommodation
                        </Typography>
                        <Typography variant="lead" color="gray" className="mt-3 font-normal">
                            “All of our accommodation is within easy walking distance of our redeveloped campus. As we’re on the edge of the city centre, this also means Leicester’s many attractions are only minutes away”
                        </Typography>
                    </CardBody>

                </Card>

                <Card className=" content-start max-w-[24rem] overflow-hidden">
                    <CardHeader
                        floated={false}
                        shadow={false}
                        color="transparent"
                        className="m-0 rounded-none"
                    >
                        <img
                            src={Sports}
                            alt="Sports and Gym"
                        />
                    </CardHeader>
                    <CardBody>
                        <Typography variant="h4" color="blue-gray" className="text-center">
                            Sports and Gym
                        </Typography>
                        <Typography variant="lead" color="gray" className="mt-3 font-normal">
                            “ Sport London clubs are open to all - from complete beginners to experienced athletes - and most offer the chance to compete for the University and receive coached sessions.”

                        </Typography>
                    </CardBody>
                </Card>
            </div>


            <div className="grid  ">
                <Carousel className="rounded-none">
                    <div className="relative h-full w-full ">
                        <img
                            src={World}
                            alt="World Class World Wide."
                            className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/70">
                            <div className="w-3/4 text-center md:w-2/4">
                                <Typography
                                    variant="h1"
                                    color="white"
                                    className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                                >
                                    World Class.World Wide.
                                </Typography>
                                <Typography
                                    variant="lead"
                                    color="white"
                                    className="mb-12 opacity-80"
                                >
                                    Founded on the ideals of inclusivity, diversity and collaboration, the University of London is a pioneering institution committed to increasing access to education, championing research excellence and delivering social good.
                                </Typography>
                                <div className="flex justify-center gap-2">
                                    <Button size="lg" color="white">
                                        Read More
                                    </Button>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative h-full w-full">
                        <img
                            src={School}
                            alt="School"
                            className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
                            <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
                                <Typography
                                    variant="h1"
                                    color="white"
                                    className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                                >
                                    School of Advanced Study secures future funding from Reaserch England
                                </Typography>
                                <Typography
                                    variant="lead"
                                    color="white"
                                    className="mb-12 opacity-80"
                                >
                                    Research England has confirmed a further five years of funding for the School of Advanced Study.
                                </Typography>
                                <div className="flex gap-2">
                                    <Button size="lg" color="white">
                                        Read More
                                    </Button>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative h-full w-full">
                        <img
                            src={House}
                            alt="House"
                            className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 grid h-full w-full items-end bg-black/75">
                            <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
                                <Typography
                                    variant="h1"
                                    color="white"
                                    className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                                >
                                    Senate House Library appoints new Head of Collections
                                </Typography>
                                <Typography
                                    variant="lead"
                                    color="white"
                                    className="mb-12 opacity-80"
                                >
                                    The University of London is pleased to announce that Lucy Evans has been appointed as Head of Collections at Senate House Library.
                                </Typography>
                                <div className="flex gap-2">
                                    <Button size="lg" color="white">
                                        Read More
                                    </Button>

                                </div>
                            </div>
                        </div>
                    </div>
                </Carousel>
            </div>

        </>
    )
}
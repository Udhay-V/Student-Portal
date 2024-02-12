import React from "react";
import { Typography } from "@material-tailwind/react";
import './About.css';
import about from "../../assets/image/Studies.jpg";

export default function About() {
    return (
        <>
            <figure className="relative h-96 w-full">
                <img
                    className="h-96 w-full rounded-none object-cover object-center"
                    src={about}
                    alt="about"
                />
                <figcaption className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
                    <Typography variant="h3" color="blue-gray text-center">
                        About Us
                    </Typography>
                </figcaption>
            </figure>

            <div className="container w-screen min-h-52  text-2xl mx-auto">
                <p className="c-intro_text">
                    Since its inception, the University of London has been committed to widening access to education. Today, our ideals of inclusivity, diversity and collaboration continue to inform everything we do – from increasing educational opportunities to vital humanities research addressing human rights and climate change.
                </p>
            </div>

            <div className="container w-screen h-full text-2xl mx-auto">
                <h1 className="text-3xl font-bold head_1">Transforming education</h1>
                <p className="container para_1">
                    We are the UK's leading provider of digital and blended distance  education, offering degrees in partnership with our federation members to 45,000 students in 190 countries. We have pioneered innovation in education since 1858.
                </p>

                <h1 className="text-3xl font-bold head_1 my-3">Global community</h1>
                <p className="container para_1">Our vibrant global community transcends geographical, economic and social borders. We are home to the University of London Institute in Paris and have more than 120 Recognised Teaching Centres across 40 countries.</p>

                <h1 className="text-3xl font-bold head_1 my-3">London Anchor</h1>
                <p className="container para_1">Since our establishment by royal charter in 1836, we have played a central role in shaping London’s identity as a hub of diversity, inclusion, educational excellence and innovation. No matter where our students are physically based, they reap the benefits of an education steeped in everything London stands for.</p>
            </div>
        </>

    )
}
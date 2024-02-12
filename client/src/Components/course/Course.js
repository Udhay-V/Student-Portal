
import React from "react";
import { Typography } from "@material-tailwind/react";
import Courses from "../../assets/image/course.jpg"

const SITEMAP = [
  {
    title: "Engineering (BE)",
    links: [" Mechanical Engineering", "Computer Science Engineering", "Electrical and Electronics Engineering", "Electronics and Communication Engineering", "Civil Engineering", "Automobile Engineering"],
  },
  {
    title: "Arts and Science",
    links: ["B.A", "BCA", "BBA", "B.com", "Digital Marketing", "Artificial Inteligence"],
  },
  {
    title: "Medical",
    links: ["MBBS", "BDS",],
  },
  {
    title: "LAW",
    links: ["BL", "LLB",],
  },

];
const SITEMAPS = [
  {
    titles: "Engineering (ME)",
    link: [" Mechanical Engineering", "Computer Science Engineering", "Electrical and Electronics Engineering", "Electronics and Communication Engineering", "Civil Engineering", "Automobile Engineering"],
  },
  {
    titles: "Arts and Science",
    link: ["M.A", "MCA", "MBA", "M.com", "Digital Marketing", "Artificial Inteligence"],
  },
  {
    titles: "Medical",
    link: ["MD"],
  },
  {
    titles: "LAW",
    link: ["LLM",],
  },

];
export default function Course() {
  return (
    <>
      <figure className="relative h-96 w-full">
        <img
          className="h-full w-full rounded-none object-cover object-center"
          src={Courses}
          alt="course"
        />
        <figcaption className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm ">
          <Typography variant="h3" color="blue-gray">
            Courses
          </Typography>
        </figcaption>
      </figure>

      <div className="mx-auto my-auto w-full h-full max-w-7xl ">
        <h1 className="mt-10 text-center font-bold text-2xl text-zinc-400 text-gray-900">UNDERGRADUATE COURSE</h1>
        <div className="mx-auto  mx-20 grid w-full grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-4 mx-5">
          {SITEMAP.map(({ title, links }, key) => (
            <div key={key} className="w-full">
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-4 font-bold uppercase opacity-50"
              >
                {title}
              </Typography>
              <ul className="space-y-1">
                {links.map((link, key) => (
                  <Typography key={key} as="li" color="blue-gray" className="font-normal">
                    <a
                      href="//"
                      className="inline-block py-1 pr-2 transition-transform hover:scale-105 "
                    >
                      {link}
                    </a>
                  </Typography>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className=" mx-auto my-auto w-full h-full max-w-7xl ">
        <h1 className="mt-10 text-center font-bold text-2xl text-zinc-400 text-gray-900">POSTGRADUATE COURSE</h1>
        <div className="mx-auto mx-20 grid w-full grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-4 mx-5">
          {SITEMAPS.map(({ titles, link }, key) => (
            <div key={key} className="w-full">
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-4 font-bold uppercase opacity-50"
              >
                {titles}
              </Typography>
              <ul className="space-y-1">
                {link.map((link, key) => (
                  <Typography key={key} as="li" color="blue-gray" className="font-normal">
                    <a
                      href="//"
                      className="inline-block py-1 pr-2 transition-transform hover:scale-105"
                    >
                      {link}
                    </a>
                  </Typography>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

    </>
  );
}
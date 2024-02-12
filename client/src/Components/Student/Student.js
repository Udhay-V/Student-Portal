
/* eslint-disable jsx-a11y/iframe-has-title */

import React, { useEffect, useState } from "react";

import { Typography } from "@material-tailwind/react";
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";
import { Card, CardBody, CardHeader, Button } from "@material-tailwind/react";
import {
    UserCircleIcon,
    PencilSquareIcon,
    ComputerDesktopIcon,
    AcademicCapIcon,
    DocumentArrowDownIcon,
    // ArrowDownTrayIcon

} from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";
import server from "../Server";
import Manufacture from "../Books/Manufacturing.pdf";
import Principle from "../Books/Principlesofmanagement.pdf";
import student from "../../assets/image/student.jpg";

export default function Student({ studdetails, setstuddetails }) {

    const navigate = useNavigate();
    const books = [{ Book: Manufacture, Bookname: "Manufacturing Technology", Authorname: "Gupta", Sl_no: 1 }, { Book: Principle, Bookname: "Principle of Management", Authorname: "", Sl_no: 1 }]

    useEffect(() => {
        const prev = async () => {
            await server.post('/login', register).then(res => {
                console.log(res.data)
                if (res.data[1] === 'success') {
                    setstuddetails([res.data[2] === null ? '' : res.data[2], res.data[3] === null ? '' : res.data[3], res.data[4] === null ? '' : res.data[4]])
                }
                else {
                    console.log('failed to fetch')
                }
            })
        }
        prev();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    const [activeTab, setActiveTab] = useState(0);
    // eslint-disable-next-line no-unused-vars
    const [currentCard, setCurrentCard] = useState(0);

    const regno = sessionStorage.getItem("registerNumber");
    const name = sessionStorage.getItem("Name");
    const branch = sessionStorage.getItem("Branch");
    const dob = sessionStorage.getItem("dob");

    // eslint-disable-next-line no-unused-vars
    const [register, SetRegister] = useState({
        RegisterNumber: regno,
        DateofBirth: dob
    });

    const handleTabChange = (index) => {
        setActiveTab(index);
        setCurrentCard(0);
    };

    const handleCardChange = (cardIndex) => {
        setCurrentCard(cardIndex);
    };

    // const handleDownload = (item) => {
    //     const pdfUrl = item;
    //     fetch(pdfUrl)
    //         .then((response) => response.blob())
    //         .then((blob) => {
    //             const a = document.createElement('a');
    //             a.href = window.URL.createObjectURL(blob);
    //             a.download = 'book.pdf'; 
    //             a.click();
    //             window.URL.revokeObjectURL(a.href);
    //         })
    //         .catch((error) => {
    //             console.error('Error downloading PDF:', error);
    //         });
    // };


    const data = [
        {
            label: "Profile",
            value: 0,
            icon: UserCircleIcon,
        },
        {
            label: "Exam Schedule",
            value: 1,
            icon: PencilSquareIcon,
        },
        {
            label: "Assessment",
            value: 2,
            icon: ComputerDesktopIcon,
        },
        {
            label: "Exam Result",
            value: 3,
            icon: AcademicCapIcon,
        },

        {
            label: "Books",
            value: 4,
            icon: DocumentArrowDownIcon,
        },
    ];

    const handleLogout = () => {
        sessionStorage.clear()
        navigate('/')
    }

    return (
        <>
            <figure className="relative h-96 w-full">
                <img
                    className="h-full w-full rounded-none object-cover object-center"
                    src={student}
                    alt="student"
                />
                <figcaption className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
                    <Typography variant="h3" color="blue-gray text-center">
                        Student
                    </Typography>
                </figcaption>

            </figure>

            <div className="w-full h-2xl">

                <Tabs value={activeTab} onChange={handleTabChange}>

                    <TabsHeader>
                        {data.map(({ label, value, icon }) => (
                            <Tab
                                key={value}
                                value={value}
                                onClick={() => handleCardChange(0)}
                            >
                                <div className="flex items-center gap-2">
                                    {React.createElement(icon, { className: "w-5 h-5" })}
                                    {label}
                                </div>
                            </Tab>
                        ))}

                    </TabsHeader>

                    <TabsBody>
                        {data.map(({ value }, tabIndex) => (
                            <TabPanel key={value} value={value} className="py-10">
                                <Card className="py-1 rounded-none">
                                    <CardBody>
                                        <Button
                                            onClick={handleLogout}
                                            variant="gradient"
                                            size="sm"
                                            className="w-xl float-right"
                                        >
                                            Logout
                                        </Button>
                                    </CardBody>
                                </Card>

                                {value === 0 && (
                                    <Card className="py-10 rounded-none" >
                                        <CardHeader color="amber" className="py-5 text-center text-2xl">Student Profile

                                        </CardHeader>
                                        <CardBody>
                                            <ul>
                                                <li className="my-3 mx-10">Register Number: {regno}</li>
                                                <li className="my-3 mx-10">Name: {name}</li>
                                                <li className="my-3 mx-10">Branch: {branch}</li>
                                            </ul>
                                        </CardBody>
                                    </Card>
                                )}

                                {value === 1 && (
                                    <Card className="py-10 rounded-none">
                                        <CardHeader color="amber" className="py-5 text-center text-2xl">Exam Schedule</CardHeader>

                                        <CardBody>
                                            {studdetails[0] && studdetails[0].Schedule !== '' ?
                                                <table className="w-full min-w-max table-auto text-left">
                                                    <thead>
                                                        <tr>

                                                            <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                                                <Typography
                                                                    variant="small"
                                                                    color="blue-gray"
                                                                    className="font-normal leading-none opacity-70"
                                                                >
                                                                    Subject Code
                                                                </Typography>
                                                            </th>
                                                            <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                                                <Typography
                                                                    variant="small"
                                                                    color="blue-gray"
                                                                    className="font-normal leading-none opacity-70"
                                                                >
                                                                    Subject Name
                                                                </Typography>
                                                            </th>
                                                            <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                                                <Typography
                                                                    variant="small"
                                                                    color="blue-gray"
                                                                    className="font-normal leading-none opacity-70"
                                                                >
                                                                    Date
                                                                </Typography>
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {studdetails[0] && studdetails[0].Exams.map((item, index) => (
                                                            <tr key={index} className="even:bg-blue-gray-50/50">
                                                                <td className="p-4">
                                                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                                                        {item.Sub_code}
                                                                    </Typography>
                                                                </td>
                                                                <td className="p-4">
                                                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                                                        {item.Sub}
                                                                    </Typography>
                                                                </td>
                                                                <td className="p-4">
                                                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                                                        {item.Date}
                                                                    </Typography>
                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table> : " No Record Found"
                                            }</CardBody>
                                    </Card>
                                )}
                                {value === 2 && (
                                    <Card className="py-10 rounded-none">
                                        <CardHeader color="amber" className="py-5 text-center text-2xl">Assessment</CardHeader>

                                        <CardBody>{studdetails[0] && studdetails[1].Accessment !== '' ?
                                            <table className="w-full min-w-max table-auto text-left">
                                                <thead>
                                                    <tr>

                                                        <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                                            <Typography
                                                                variant="small"
                                                                color="blue-gray"
                                                                className="font-normal leading-none opacity-70"
                                                            >
                                                                Test No
                                                            </Typography>
                                                        </th>
                                                        <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                                            <Typography
                                                                variant="small"
                                                                color="blue-gray"
                                                                className="font-normal leading-none opacity-70"
                                                            >
                                                                Subject Name
                                                            </Typography>
                                                        </th>
                                                        <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                                            <Typography
                                                                variant="small"
                                                                color="blue-gray"
                                                                className="font-normal leading-none opacity-70"
                                                            >
                                                                Marks
                                                            </Typography>
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {studdetails[0] && studdetails[1].Access.map((item, index) => (
                                                        <tr key={index} className="even:bg-blue-gray-50/50">
                                                            <td className="p-4">
                                                                <Typography variant="small" color="blue-gray" className="font-normal">
                                                                    {item.Sl_no}
                                                                </Typography>
                                                            </td>
                                                            <td className="p-4">
                                                                <Typography variant="small" color="blue-gray" className="font-normal">
                                                                    {item.Test}
                                                                </Typography>
                                                            </td>
                                                            <td className="p-4">
                                                                <Typography variant="small" color="blue-gray" className="font-normal">
                                                                    {item.Mark}
                                                                </Typography>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table> : " No Record Found"
                                        }</CardBody>
                                    </Card>
                                )}
                                {value === 3 && (
                                    <Card className="py-10 rounded-none">
                                        <CardHeader color="amber" className="py-5 text-center text-2xl">Exam Result</CardHeader>

                                        <CardBody>
                                            {studdetails[0] && studdetails[2].Result !== '' ?
                                                <table className="w-full min-w-max table-auto text-left">
                                                    <thead>
                                                        <tr>
                                                            <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                                                <Typography
                                                                    variant="small"
                                                                    color="blue-gray"
                                                                    className="font-normal leading-none opacity-70"
                                                                >
                                                                    Subject Code
                                                                </Typography>
                                                            </th>
                                                            <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                                                <Typography
                                                                    variant="small"
                                                                    color="blue-gray"
                                                                    className="font-normal leading-none opacity-70"
                                                                >
                                                                    Subject Name
                                                                </Typography>
                                                            </th>
                                                            <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                                                <Typography
                                                                    variant="small"
                                                                    color="blue-gray"
                                                                    className="font-normal leading-none opacity-70"
                                                                >
                                                                    Grade
                                                                </Typography>
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {studdetails[0] && studdetails[2].Subjects.map((item, index) => (
                                                            <tr key={index} className="even:bg-blue-gray-50/50">
                                                                <td className="p-4">
                                                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                                                        {item.Sub_code}
                                                                    </Typography>
                                                                </td>
                                                                <td className="p-4">
                                                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                                                        {item.Sub_Name}
                                                                    </Typography>
                                                                </td>
                                                                <td className="p-4">
                                                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                                                        {item.Grade}
                                                                    </Typography>
                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table> : " No Record Found"
                                            }</CardBody>
                                    </Card>
                                )}

                                {value === 4 && (
                                    <Card className="py-10 rounded-none" >
                                        <CardHeader color="amber" className="py-5 text-center text-2xl">Books
                                        </CardHeader>
                                        {books.map((item, index) => (

                                            <CardBody>

                                                {/* <div key={index} className="flex items-center justify-between mb-4">
                                                    <Button  className="float-right" onClick={() => { handleDownload(item.Book) }}>
                                                     <ArrowDownTrayIcon className="bg-slate-50	"/>
                                                    </Button>
                                                </div> */}
                                                <div className="flex items-center justify-center">
                                                    <iframe src={item.Book} alt="Book Cover" className=" pdf w-full h-screen bg-slate-50" />
                                                </div>
                                                <div className="mt-4 text-center">
                                                    <p className="text-xl font-bold">{item.Bookname}</p>
                                                    <p className="text-gray-600">{item.Authorname}</p>
                                                </div>
                                            </CardBody>))}
                                    </Card>
                                )}
                            </TabPanel>
                        ))}
                    </TabsBody>
                </Tabs>
            </div>
        </>
    );
}

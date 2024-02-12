
import React, { useState } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
  Button,
  Input
} from "@material-tailwind/react";
import {
  Dialog,
  Card,
  CardBody,
  CardFooter,
} from "@material-tailwind/react";
import { useNavigate } from 'react-router-dom';
import server from "../Server";

export default function Head({ studdetails, setstuddetails }) {
  const [valid, setValid] = useState(true);
  const navigate = useNavigate();
  const [register, SetRegister] = useState({
    RegisterNumber: '',
    DateofBirth: ''
  });

  const handleOnClick = (e) => {
    e.preventDefault()

    if (register) {
      if (register.RegisterNumber && register.RegisterNumber.length !== 12 && register.RegisterNumber.length !== 13) {
        setValid(false)
      } else {
        setValid(true)
        server.post('/login', register).then(res => {
          console.log(res.data)
          if (res.data[1] === 'success') {
            setOpen((prevOpen) => !prevOpen)
            setstuddetails({ Schedule: res.data[2] === null ? '' : res.data[2], Accessment: res.data[3] === null ? '' : res.data[3], Result: res.data[4] === null ? '' : res.data[4] })
            sessionStorage.setItem('registerNumber', register.RegisterNumber)
            sessionStorage.setItem('dob', register.DateofBirth)
            sessionStorage.setItem('Name', res.data[0].Name)
            sessionStorage.setItem('Branch', res.data[0].Branch)
            navigate('/student')
            SetRegister('')
          }
          else {
            alert("check the Register Number and Date of Birth")
            SetRegister('')
          }

        })
      }
    }

  }

  const [openNav, setOpenNav] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((prevOpen) => !prevOpen);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="big"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="/courses" className="flex items-center hover:text-red-500 transition-colors">
          Course
        </a>
      </Typography>
      <Typography
        as="li"
        variant="big"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="/study" className="flex items-center hover:text-red-500 transition-colors">
          Study
        </a>
      </Typography>
      <Typography
        as="li"
        variant="big"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="//" onClick={(e) => { e.preventDefault(); handleOpen(); }} className="flex items-center hover:text-red-500 transition-colors">
          Student
        </a>
      </Typography>
      <Typography
        as="li"
        variant="big"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="/about" className="flex items-center hover:text-red-500 transition-colors">
          About us
        </a>
      </Typography>

      {/* <div className="relative flex w-full gap-2 md:w-max">
        <Input
          type="search"
          color="grey"
          label="Type here..."
          className="pr-20"
          containerProps={{
            className: "min-w-[200px]",
          }}
        />
        <Button
          size="sm"
          color="gray"
          className="!absolute right-1 top-1 rounded"
        >
          Search
        </Button>
      </div> */}
    </ul>
  );

  return (
    <>
      <Navbar className="sticky top-3 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="/"
            className="mr-4 cursor-pointer py-1.5 font-bold"
          >
            <h1 className="text-3xl">University of London</h1>
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            {/* <div className="flex items-center gap-x-1">
              <Button
                variant="text"
                size="sm"
                className="hidden lg:inline-block"
              >
                <span>Log In</span>
              </Button>
              <Button
                variant="gradient"
                size="sm"
                className="hidden lg:inline-block"
              >
                <span>Sign in</span>
              </Button>
            </div> */}
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>
          {navList}
        </MobileNav>
      </Navbar>

      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[24rem]">
          <CardBody className="flex flex-col gap-4">
            <Typography variant="h4" color="blue-gray" className="text-center">
              Student Login
            </Typography>
            <Typography
              className="mb-3 font-normal text-center"
              variant="paragraph"
              color="gray"
            >
              Enter your Register Number and Date of Birth to Login.
            </Typography>
            <Typography className="-mb-2" variant="h6">
              Register Number
            </Typography>
            <Input
              label="Register Number"
              size="lg" value={register.RegisterNumber}
              onChange={(e) => {
                SetRegister((prev) => ({
                  ...prev, RegisterNumber: e.target.value,
                }));
              }}
            />
            <span>{!valid ? "Register Number is Invalid" : ''}</span>
            <Typography className="-mb-2" variant="h6">
              Date of Birth [DD-MM-YYYY]
            </Typography>
            <Input label="Date of Birth " size="lg" type="Date" value={register.DateofBirth} onChange={(e) => {
              SetRegister((prev) => ({
                ...prev,
                DateofBirth: e.target.value,
              }));
            }} />

          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" onClick={handleOnClick} fullWidth>
              Log In
            </Button>

          </CardFooter>
        </Card>
      </Dialog>

    </>
  );
}
import { Typography } from "@material-tailwind/react";
import { Link } from "wouter";

export const StacklineNavbar = () => (
  <nav className="block w-full px-8 shadow-md backdrop-saturate-200 backdrop-blur-2xl bg-opacity-80 text-white py-2 mb-4 max-w-full rounded-none">
    <div className="max-w-full flex items-center justify-between">
      <Link href="/">
        <Typography
          href="/"
          className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-inherit cursor-pointer py-1.5 lg:ml-2"
        >
          <img src="../stacklineLogoLight.svg" alt="logo-ct" className="w-20" />
        </Typography>
      </Link>
    </div>
  </nav>
);

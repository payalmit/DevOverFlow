import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

interface Props {
  title: string;
  description: string;
  link: string;
  linkTitle: string;
}

const NoResult = ({ title, description, link, linkTitle }: Props) => {
  return (
    <div className="flex mt-10 w-full flex-col items-center justify-center">
      <Image
        alt="No result illustration"
        src="/assets/images/light-illustration.png"
        height={200}
        width={270}
        className="block object-contain dark:hidden"
      ></Image>
      <Image
        alt="No result illustration"
        src="/assets/images/dark-illustration.png"
        height={200}
        width={270}
        className="hidden object-contain dark:flex"
      ></Image>
      <h2 className="h2-bold text-dark200_light900 mt-8">{title}</h2>
      <p className="text-dark500_light700 body-regular mt-4 max-w-sm text-center">
        {description}
      </p>
      <Link href={link}>
        <Button className="paragraph-medium mt-5 min-h-[46px] rounded-lg bg-primary-500 px-4 py-3 text-light-900 hover:bg-primary-500 dark:bg-primary-500 dark:text-light-900">
          {linkTitle}
        </Button>
      </Link>
    </div>
  );
};

export default NoResult;

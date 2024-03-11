import React from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";

const GlobalSearch = () => {
  return (
    <div className="relative w-full max-w-[600px] max-lg:hidden flex items-center">
      <Image
        src="/assets/icons/search.svg"
        alt="search"
        width={24}
        height={24}
        className="cursor-pointer"
      />
      <Input
        className="paragraph-regular no-focus placeholder background-light800_darkgradient border-none shadow-none outline-none"
        type="text"
        placeholder="Search globally"
        value=""
      />
    </div>
  );
};

export default GlobalSearch;

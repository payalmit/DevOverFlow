import Image from "next/image";
import React from "react";
import Link from "next/link";

interface Props {
  imgUrl: string;
  value: number | string;
  title: string;
  textStyles: string;
  href?: string;
  isAuthor?: boolean;
  alt: string;
}

const Metric = ({
  imgUrl,
  value,
  title,
  textStyles,
  href,
  isAuthor,
  alt,
}: Props) => {
  const metricContent = (
    <>
      <Image
        src={imgUrl}
        height={16}
        width={16}
        alt={alt}
        className={`object-contain ${href ? "rounded-full" : ""} `}
      />
      <p className={`${textStyles} flex items-center gap-1`}>
        {value}
        <span
          className={`small-regular line-clamp-1 ${isAuthor ? "max-sm:hidden" : ""}`}
        >
          {title}
        </span>
      </p>
    </>
  );
  if (href)
    return (
      <Link href={href} className="flex-center gap-1">
        {metricContent}
      </Link>
    );
  return <div className="flex-center flex-wrap gap-1">{metricContent}</div>;
};

export default Metric;

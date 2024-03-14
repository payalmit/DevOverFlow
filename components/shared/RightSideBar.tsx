import Link from "next/link";
import React from "react";
import Image from "next/image";
import RenderTag from "./RenderTag";

const RightSideBar = () => {
  const popularTags = [
    {
      id: "1",
      name: "javascript",
      totalQuestion: 5,
      showCount: true,
    },
    {
      id: "1",
      name: "javascript",
      totalQuestion: 5,
    },
  ];
  const hotQuestions = [
    {
      id: "1",
      title: "Myquestion",
    },
    {
      id: "2",
      title: "Myquestion",
    },
    {
      id: "2",
      title: "Myquestion",
    },
    {
      id: "2",
      title: "Myquestion",
    },
    {
      id: "3",
      title: "Myquestion",
    },
  ];
  return (
    <section
      className="background-light900_dark200 
    light-border shadow-light-300 sticky right-0 top-0 flex 
    h-screen flex-col  overflow-y-auto border-l p-6 pt-36
    max-xl:hidden w-[350px]
    dark:shadow-none"
    >
      <div className="">
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
        <div
          className="mt-7 flex flex-col w-full gap-[30px]
        "
        >
          {hotQuestions.map((question) => (
            <Link
              href={`/questions/${question.id}`}
              key={question.id}
              className="flex cursor-pointer items-center justify-between gap-7"
            >
              <p className="body-medium text-dark500_light700">
                {question.title}
              </p>
              <Image
                src="/assets/icons/chevron-right.svg"
                alt="chevron-right"
                height={20}
                width={20}
                className="invert-colors"
              />
            </Link>
          ))}
        </div>
      </div>
      <h3
        className="h3-bold 
      text-dark200_light900 mt-6"
      >
        Popular Tags
      </h3>
      <div className="mt-7 flex flex-col gap-4">
        {popularTags.map((tag) => (
          <RenderTag
            key={tag.id}
            _id={tag.id}
            name={tag.name}
            totalQuestion={tag.totalQuestion}
            showCount
          />
        ))}
      </div>
      <div className="mt-16"></div>
    </section>
  );
};

export default RightSideBar;

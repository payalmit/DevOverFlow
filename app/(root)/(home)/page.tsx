import Filter from "@/components/shared/Filter";
import HomeFilters from "@/components/shared/HomeFilters";
import LocalSearchBar from "@/components/shared/LocalSearchBar";
import NoResult from "@/components/shared/NoResult";
import QuestionCard from "@/components/shared/QuestionCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";
// import ExampleClient from "../../../components/ExampleClient";
// import { UserButton } from "@clerk/nextjs";

const HomePageFilters = [
  { name: "Newest", value: "newest" },
  { name: "Recommended", value: "recommended" },
  { name: "Frequent", value: "frequent" },
  { name: "Unanswered", value: "unanswered" },
];

const questions = [
  {
    _id: "1",
    title: "Sample Question Title",
    tags: [
      { _id: "tag1", name: "Tag1" },
      { _id: "tag2", name: "Tag2" },
    ],
    author: {
      _id: "author1",
      name: "John Doe",
      picture: "https://example.com/john-doe.jpg",
    },
    upvotes: 42,
    answers: [
      {
        _id: "answer1",
        content: "This is a sample answer.",
        author: {
          _id: "author2",
          name: "Jane Smith",
          picture: "https://example.com/jane-smith.jpg",
        },
        createdAt: new Date("2024-03-09T12:30:00Z"),
      },
      {
        _id: "answer2",
        content: "Another sample answer.",
        author: {
          _id: "author3",
          name: "Bob Johnson",
          picture: "https://example.com/bob-johnson.jpg",
        },
        createdAt: new Date("2024-03-09T13:00:00Z"),
      },
    ],
    views: 100,
    createdAt: new Date("2024-03-09T12:00:00Z"),
  },
];

export default function Home() {
  // console.log("Hello, Can u see me ?");

  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        {/* <ExampleClient />

      <Link href="/projects">See Projects</Link>

      <h1 className="h1-bold flex flex-col justify-center items-center">
        Home
      </h1>

      <Link href="/projects/lists">See Projects List</Link> */}
        <h1 className="h1-bold text-dark500_light700 max-lg:w-full items-center justify-center max-lg:flex">
          {" "}
          ALL QUESTIONS
        </h1>
        <Link href="/ask-question" className="flex justify-end max-sm:w-full ">
          <Button
            className="primary-gradient px-4 py-2
      min-h-[46px] !text-light-900 max-lg:w-full"
          >
            Ask A Question
          </Button>
        </Link>
      </div>
      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchBar
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="search for question"
          otherClasses="flex-1"
        />
        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>
      <HomeFilters />

      <div
        className="mt-10 flex flex-col w-full
      gap-6"
      >
        {questions.length > 0 ? (
          questions.map((question) => (
            <QuestionCard key={question._id} question={question} />
          ))
        ) : (
          <NoResult
            title="There is no question "
            description="No match found"
            link="/ask-question"
            linkTitle="Ask Question"
          />
        )}
      </div>
    </>
  );
}

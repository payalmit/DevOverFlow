import React from "react";
import Link from "next/link";
import RenderTag from "./RenderTag";
import Metric from "./Metric";
import { formatAndDivideNumber, getTimestamp } from "@/lib/utils";

interface Props {
  question: {
    _id: string;
    title: string;
    tags: {
      _id: string;
      name: string;
    }[];
    author: {
      _id: string;
      name: string;
      picture: string;
    };
    upvotes: number;
    answers: Array<object>;
    views: number;
    createdAt: Date;
    // clerkId?: string | null;
  };
}

const QuestionCard = ({ question }: Props) => {
  return (
    <div className="card-wrapper p-9 sm:px-11 rounded-[10px] text-dark500_light700g">
      <div className="flex flex-col-reverse items-start justify-between gap-5 sm:flex-row">
        <div>
          {" "}
          <span className="subtle-regular text-dark400_light700 line-clamp-1 flex sm:hidden">
            {getTimestamp(question.createdAt)}
          </span>
          <Link href={`/question/${question._id}`}>
            <h3
              className="sm:h3-semibold base-semibold 
          text-dark200_light900 line-clamp-1 flex-1"
            >
              {question.title}
            </h3>{" "}
          </Link>
        </div>
        if signedin edit button
      </div>
      <div className="mt-3.5 flex flex-wrap gap-2">
        {question.tags.map((tag) => (
          <RenderTag key={tag._id} _id={tag._id} name={tag.name} />
        ))}
      </div>
      <div
        className="flex-between mt-6 w-full flex-wrap gap-3
      "
      >
        <Metric
          imgUrl="/assets/icons/avatar.svg"
          alt="users"
          value={question.author.name}
          title={` - asked ${getTimestamp(question.createdAt)} `}
          href={`/profile/${question.author._id}`}
          isAuthor
          textStyles="body-medium text-dark400_light800"
        />

        <Metric
          imgUrl="/assets/icons/like.svg"
          alt="upvotes"
          value={formatAndDivideNumber(question.upvotes)}
          title="Votes"
          textStyles="small-medium text-dark400_light800"
        />
        <Metric
          imgUrl="/assets/icons/message.svg"
          alt="message"
          value={formatAndDivideNumber(question.answers.length)}
          title="Answers"
          textStyles="small-medium text-dark400_light800"
        />
        <Metric
          imgUrl="/assets/icons/eye.svg"
          alt="eye"
          value={formatAndDivideNumber(question.views)}
          title="Views"
          textStyles="small-medium text-dark400_light800"
        />
      </div>
    </div>
  );
};

export default QuestionCard;

import React from "react";
import Link from "next/link";
import RenderTag from "../shared/RenderTags";
import Metrix from "../shared/Metrix";
import { formatBigNumber, getTimestamp } from "@/lib/utils";

interface QuestionCardProps {
  title: string;
  _id: number;
  tags: { _id: number; name: string }[];
  author: { _id: number; name: string; picture: string }[];
  upvotes: number;
  views: number;
  answers: Array<Object>;
  createdAt: Date;
}

const QuestionCard = ({
  _id,
  title,
  tags,
  author,
  upvotes,
  views,
  answers,
  createdAt,
}: QuestionCardProps) => {
  return (
    <div className="card-wrapper rounded-[10px] p-9 sm:px-11">
      <div className="flex flex-col-reverse items-start justify-between gap-5 sm:flex-row">
        <div>
          <span className="subtle-regular text-dark400_light700 line-clamp-1 flex sm:hidden">
            <p>{createdAt.toLocaleDateString()}</p>
          </span>
          <Link href={`/question/${_id}`}>
            <h3 className="sm:h3-semibold base-semibold text-dark200_light900 line-clamp-1 flex-1">
              {title}
            </h3>
          </Link>
        </div>
      </div>
      <div className="mt-3.5 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <RenderTag
            key={tag._id}
            _id={tag._id.toString()}
            name={tag.name}
            showCount
          />
        ))}
      </div>
      <div className="flex-between mt-6 w-full flex-wrap gap-3">
        <Metrix
          imgUrl={"/assets/icons/avatar.svg"}
          alt="Author"
          value={author[0].name}
          title={` - asked ${getTimestamp(createdAt)}`}
          href={`/profile/${author[0]._id}`}
          isAuthor
          textStyles="body-medium text-dark400_light700"
        />
        <Metrix
          imgUrl="/assets/icons/like.svg"
          alt="Upvotes"
          value={formatBigNumber(upvotes)}
          title="Votes"
          textStyles="small-medium text-dark400_light800"
        />
        <Metrix
          imgUrl="/assets/icons/message.svg"
          alt="Messages"
          value={formatBigNumber(answers.length)}
          title="Answers"
          textStyles="small-medium text-dark400_light800"
        />
        <Metrix
          imgUrl="/assets/icons/eye.svg"
          alt="Views"
          value={formatBigNumber(views)}
          title="Views"
          textStyles="small-medium text-dark400_light800"
        />
      </div>
    </div>
  );
};

export default QuestionCard;

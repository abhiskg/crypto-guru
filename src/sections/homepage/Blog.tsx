import React from "react";
import { Button } from "~/components/buttons/Button";
import { BlogCard } from "~/components/cards/BlogCard";
import { blogData } from "~/utils/data";

export const Blog = () => {
  return (
    <section className="custom-container mx-auto my-16">
      <h1 className="text-center text-3xl font-semibold">FROM OUR BLOG</h1>

      <div className="mt-1 flex justify-center text-btn-secondary">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <polyline points="19 12 12 19 5 12"></polyline>
        </svg>
      </div>

      <div className="my-10 flex justify-center gap-5">
        {blogData.map(({ date, description, id, imgSrc, title }) => (
          <BlogCard
            key={id}
            alt={title}
            date={date}
            description={description}
            imgSrc={imgSrc}
            title={title}
          />
        ))}
      </div>
      <div className=" flex justify-center">
        <Button title="View All Products" />
      </div>
    </section>
  );
};

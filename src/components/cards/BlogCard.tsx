import Image from "next/image";

type BlogCardProps = {
  imgSrc: string;
  alt: string;
  date: string;
  title: string;
  description: string;
};

export const BlogCard = ({
  imgSrc,
  alt,
  date,
  description,
  title,
}: BlogCardProps) => {
  return (
    <div className="max-w-[21rem]  cursor-pointer rounded-3xl border border-[#D9D9D9] p-4 hover:border-btn-secondary">
      <Image src={imgSrc} alt={alt} width={380} height={180} />
      <small className="mt-2 block">{date}</small>
      <h3 className="mt-1 font-medium">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <button
        className={`mt-5 w-full rounded-3xl border border-btn-primary py-2 text-center font-medium hover:bg-btn-primary`}
      >
        Read More
      </button>
    </div>
  );
};

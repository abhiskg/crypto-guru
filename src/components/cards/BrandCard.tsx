import Image from "next/image";

type BrandCard = {
  imgSrc: string;
  alt: string;
  brandName: string;
};

export const BrandCard = ({ imgSrc, alt, brandName }: BrandCard) => {
  return (
    <div className="group grid cursor-pointer place-items-center rounded-3xl border border-btn-secondary p-5 hover:bg-btn-primary">
      <Image src={imgSrc} alt={alt} width={100} height={209} />
      <p className="mt-3 text-center group-hover:text-white">{brandName}</p>
    </div>
  );
};

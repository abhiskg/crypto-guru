import Image from "next/image";

type BrandCardProps = {
  imgSrc: string;
  alt: string;
  brandName: string;
};

export const BrandCard = ({ imgSrc, alt, brandName }: BrandCardProps) => {
  return (
    <div className="group grid cursor-pointer place-items-center rounded-3xl border border-btn-secondary p-5 shadow-sm hover:bg-btn-primary">
      <Image src={imgSrc} alt={alt} width={120} height={109} />
      <p className="mt-3 text-center font-medium group-hover:text-white">
        {brandName}
      </p>
    </div>
  );
};

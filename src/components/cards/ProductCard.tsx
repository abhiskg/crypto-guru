import Image from "next/image";

type ProductCardProps = {
  imgSrc: string;
  alt: string;
  productName: string;
  price: number;
};

export const ProductCard = ({
  imgSrc,
  alt,
  productName,
  price,
}: ProductCardProps) => {
  return (
    <div className="group grid cursor-pointer place-items-center rounded-3xl border border-gray-400 p-5 hover:bg-btn-primary">
      <Image src={imgSrc} alt={alt} width={200} height={209} />
      <p className="mt-3 group-hover:text-white">{productName}</p>
      <button
        className={`flex w-60 items-center justify-center gap-4 rounded-3xl border bg-btn-primary py-3 shadow `}
      >
        US${price}
      </button>
    </div>
  );
};

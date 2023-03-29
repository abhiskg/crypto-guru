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
    <div className="group grid cursor-pointer place-items-center rounded-3xl border border-[#D9D9D9] bg-white p-4 shadow-sm hover:border-btn-secondary">
      <div className="relative h-60 w-full overflow-hidden">
        <Image src={imgSrc} alt={alt} fill />
      </div>
      <p className="mt-5 font-medium">{productName}</p>
      <button
        className={`mt-5 flex w-full items-center justify-center gap-4 rounded-3xl border-2 border-btn-primary py-3 shadow hover:bg-btn-primary `}
      >
        US${price}
      </button>
    </div>
  );
};

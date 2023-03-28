type ButtonProps = {
  title: string;
};

export const Button = ({ title }: ButtonProps) => {
  return (
    <button
      className={`flex w-60 items-center justify-center gap-4 rounded-3xl border bg-btn-primary py-3 shadow `}
    >
      <span className="font-semibold">{title}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="#2c3e50"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <line x1="5" y1="12" x2="19" y2="12" />
        <line x1="15" y1="16" x2="19" y2="12" />
        <line x1="15" y1="8" x2="19" y2="12" />
      </svg>
    </button>
  );
};

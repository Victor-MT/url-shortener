
export default function IconButton({ children, className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`bg-gray-200/50 text-gray-500/50 font-semibold text-sm border border-transparent hover:bg-gray-200 hover:text-gray-500 hover:border-blue-base rounded flex flex-row items-center gap-2 ${className ?? ''}`}
      {...props}
    >
      {children}
    </button>
  );
}

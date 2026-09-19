export default function InputButton({ children, className, placeholder, title, ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
    return (
        <div className="flex flex-col gap-2 w-full">
            <p className="text-xs font-regular text-gray-500 uppercase"> {title} </p>
            <input 
                className={`border border-gray-300 rounded-md p-2 ${className ?? ''}`} 
                placeholder={placeholder}
                {...props}
            >
                {children}
            </input>
        </div>
    )
}
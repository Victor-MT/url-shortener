

type ButtonVariant = 'primary' | 'secondary' | 'danger';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-blue-base/50 hover:bg-blue-base text-white',
  secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-600',
  danger: 'bg-danger/50 hover:bg-danger text-white',
};

export default function Button({ children, className, variant = 'primary', disabled = false, ...props }: ButtonProps) {
  return (
    <button
      className={`text-md px-4 py-4 rounded-lg ${variantClasses[variant]} ${className ?? ''}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}

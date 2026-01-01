import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "affiliate" | "product" | "merch";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
}: ButtonProps) {
  const baseClasses = "font-bold rounded-full transition-all";
  
  const variantClasses = {
    primary: "bg-purple-600 hover:bg-purple-700 text-white",
    secondary: "bg-purple-900/30 border border-purple-500/50 hover:bg-purple-900/50 text-purple-200",
    affiliate: "bg-gradient-to-r from-amber-500 to-yellow-500 text-black hover:from-amber-400 hover:to-yellow-400 shadow-lg shadow-amber-500/50",
    product: "bg-purple-600 hover:bg-purple-700 text-white",
    merch: "bg-indigo-600 hover:bg-indigo-700 text-white",
  };
  
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-10 py-5 text-lg",
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  if (href) {
    return (
      <Link href={href} className={`inline-block ${classes}`}>
        {children}
      </Link>
    );
  }
  
  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}


"use client"

export function Button({ children, className = '', variant = 'solid', ...props }) {
  const base =
    'px-5 py-2 rounded-md text-sm font-medium transition duration-200';

  const variants = {
    solid: 'bg-purple-600 text-white hover:bg-purple-500',
    ghost: 'bg-transparent text-purple-400 hover:text-white hover:bg-purple-800',
    outline: 'border border-purple-500 text-purple-300 hover:bg-purple-800',
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}

const variantClasses = {
  primary: "bg-success-600 text-white hover:bg-blue",
  default: "h-4 w-4 rounded-full",
};
const Button = ({
  label,
  type = "button",
  className = "",
  onClick,

  variant = "primary",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 rounded-md font-semibold disabled:opacity-50 ${variantClasses[variant]} ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;

export default function Button({
  children,
  ...props
}) {
  return (
    <button
      {...props}
      className="
      px-5
      py-3
      rounded-xl
      bg-white
      text-black
      font-medium
      "
    >
      {children}
    </button>
  );
}
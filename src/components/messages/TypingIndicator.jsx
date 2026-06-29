export default function TypingIndicator() {
  return (
    <div className="flex gap-2 p-4">
      <div className="w-2 h-2 rounded-full bg-white animate-bounce" />
      <div className="w-2 h-2 rounded-full bg-white animate-bounce delay-100" />
      <div className="w-2 h-2 rounded-full bg-white animate-bounce delay-200" />
    </div>
  );
}
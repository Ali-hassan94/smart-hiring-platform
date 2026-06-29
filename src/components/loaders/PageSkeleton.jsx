export default function PageSkeleton() {
  return (
    <div className="space-y-6">
      <div
        className="
        h-12
        bg-white/10
        rounded-xl
        animate-pulse
        "
      />

      <div
        className="
        h-48
        bg-white/10
        rounded-3xl
        animate-pulse
        "
      />
    </div>
  );
}
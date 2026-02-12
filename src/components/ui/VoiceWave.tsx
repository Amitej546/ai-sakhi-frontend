export default function VoiceWave() {
  return (
    <div className="flex gap-1 items-end h-6">
      {[1, 2, 3, 4, 5].map((bar) => (
        <div
          key={bar}
          className="w-1 bg-indigo-500 animate-pulse"
          style={{ height: `${bar * 6}px` }}
        />
      ))}
    </div>
  );
}

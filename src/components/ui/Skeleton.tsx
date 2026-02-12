export default function Skeleton({ height = "h-6" }: { height?: string }) {
  return (
    <div
      className={`animate-pulse bg-gray-300 dark:bg-gray-700 rounded ${height} mb-3`}
    />
  );
}

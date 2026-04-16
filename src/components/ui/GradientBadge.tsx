interface GradientBadgeProps {
  children: React.ReactNode;
}

export function GradientBadge({ children }: GradientBadgeProps) {
  return (
    <span className="inline-flex items-center rounded-full bg-indigo-500/10 px-4 py-1.5 text-sm font-medium text-indigo-600 ring-1 ring-indigo-500/20 dark:bg-indigo-500/20 dark:text-indigo-400 dark:ring-indigo-500/30">
      {children}
    </span>
  );
}

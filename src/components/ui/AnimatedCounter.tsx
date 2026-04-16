"use client";

import { useCountUp } from "@/hooks/useCountUp";

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  duration?: number;
}

export function AnimatedCounter({
  end,
  suffix = "",
  duration = 2000,
}: AnimatedCounterProps) {
  const { count, ref } = useCountUp({ end, duration });

  return (
    <span ref={ref} className="tabular-nums">
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

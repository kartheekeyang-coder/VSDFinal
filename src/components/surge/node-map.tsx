import { WAREHOUSES } from "@/lib/surge/catalog";
import type { RegionId } from "@/lib/surge/types";
import { cn } from "@/lib/utils";

export function NodeMap({
  demand,
  stock,
  className,
}: {
  demand: Record<RegionId, number>;
  stock: Record<RegionId, number>;
  className?: string;
}) {
  const links: [RegionId, RegionId][] = [
    ["delhi", "mumbai"],
    ["delhi", "kolkata"],
    ["delhi", "hyderabad"],
    ["mumbai", "bangalore"],
    ["mumbai", "hyderabad"],
    ["hyderabad", "bangalore"],
    ["bangalore", "kochi"],
    ["hyderabad", "kolkata"],
  ];
  const pos = Object.fromEntries(WAREHOUSES.map((w) => [w.id, w])) as Record<
    RegionId,
    (typeof WAREHOUSES)[number]
  >;

  return (
    <svg viewBox="0 0 320 360" className={cn("h-full w-full", className)} role="img" aria-label="Warehouse network">
      {links.map(([a, b]) => {
        const pa = pos[a];
        const pb = pos[b];
        return (
          <line
            key={`${a}-${b}`}
            x1={pa.x * 320}
            y1={pa.y * 360}
            x2={pb.x * 320}
            y2={pb.y * 360}
            className="stroke-foreground/12"
            strokeWidth={1}
          />
        );
      })}
      {WAREHOUSES.map((w) => {
        const d = demand[w.id] ?? 0;
        const s = stock[w.id] ?? 0;
        const r = 10 + d * 18;
        const gap = d - s;
        const hot = gap > 0.12;
        const cx = w.x * 320;
        const cy = w.y * 360;
        return (
          <g key={w.id}>
            <circle
              cx={cx}
              cy={cy}
              r={r}
              className={hot ? "fill-spike/20 stroke-spike/70" : "fill-foreground/8 stroke-foreground/25"}
              strokeWidth={1.25}
            />
            <circle cx={cx} cy={cy} r={3.5} className={hot ? "fill-spike" : "fill-foreground/70"} />
            <text
              x={cx}
              y={cy + r + 14}
              textAnchor="middle"
              className="fill-muted-foreground"
              fontSize="10"
              fontFamily="Outfit, sans-serif"
            >
              {w.city}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

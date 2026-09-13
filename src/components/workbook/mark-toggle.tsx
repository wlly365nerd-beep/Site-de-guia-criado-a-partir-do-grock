import { Check, Minus } from "lucide-react";
import type { Mark } from "@/lib/progress";
import { cn } from "@/lib/utils";

const labels: Record<Mark, string> = {
  off: "Não iniciado",
  doing: "Em andamento",
  done: "Concluído",
};

export function MarkToggle({
  mark,
  onToggle,
}: {
  mark: Mark;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={labels[mark]}
      title={`${labels[mark]} — clique para avançar`}
      className={cn(
        "inline-flex h-8 min-w-8 items-center justify-center gap-1.5 rounded-sm border px-2 font-mono text-[11px] uppercase tracking-wide transition-[background-color,border-color,color] duration-150",
        mark === "off" && "border-border bg-bg-elevated text-muted",
        mark === "doing" && "border-warn/40 bg-warn/10 text-warn",
        mark === "done" && "border-primary/40 bg-primary/10 text-primary",
      )}
    >
      {mark === "done" ? <Check className="size-3.5" strokeWidth={2.4} /> : null}
      {mark === "doing" ? <Minus className="size-3.5" strokeWidth={2.4} /> : null}
      <span className="hidden sm:inline">{labels[mark]}</span>
    </button>
  );
}

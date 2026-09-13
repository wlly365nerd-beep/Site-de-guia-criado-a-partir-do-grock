import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Mark = "off" | "doing" | "done";

interface ProgressState {
  marks: Record<string, Mark>;
  toggle: (id: string) => void;
  setMark: (id: string, mark: Mark) => void;
  reset: () => void;
}

const cycle: Record<Mark, Mark> = { off: "doing", doing: "done", done: "off" };

export const useProgress = create<ProgressState>()(
  persist(
    (set) => ({
      marks: {},
      toggle: (id) =>
        set((s) => ({
          marks: { ...s.marks, [id]: cycle[s.marks[id] ?? "off"] },
        })),
      setMark: (id, mark) => set((s) => ({ marks: { ...s.marks, [id]: mark } })),
      reset: () => set({ marks: {} }),
    }),
    { name: "trilha-fullstack-progress" },
  ),
);

export function countDone(ids: string[], marks: Record<string, Mark>): number {
  return ids.filter((id) => marks[id] === "done").length;
}

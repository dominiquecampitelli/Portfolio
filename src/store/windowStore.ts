import { ReactNode } from "react";
import { create } from "zustand";

export interface WindowInstance {
  id: string;
  title: string;
  content: ReactNode;
  zIndex: number;
}

interface WindowStore {
  windows: WindowInstance[];
  openWindow: (win: Omit<WindowInstance, "zIndex">) => void;
  closeWindow: (id: string) => void;
  bringToFront: (id: string) => void;
}

export const useWindowStore = create<WindowStore>((set) => ({
  windows: [],
  openWindow: (win) => {
    set((state) => {
      const exists = state.windows.find((w) => w.id === win.id);
      if (exists) return state;

      const nextZ = Math.max(1, ...state.windows.map((w) => w.zIndex || 1)) + 1;
      return {
        windows: [...state.windows, { ...win, zIndex: nextZ }],
      };
    });
  },
  closeWindow: (id) =>
    set((state) => ({
      windows: state.windows.filter((w) => w.id !== id),
    })),
  bringToFront: (id) =>
    set((state) => {
      const nextZ = Math.max(1, ...state.windows.map((w) => w.zIndex || 1)) + 1;
      return {
        windows: state.windows.map((w) =>
          w.id === id ? { ...w, zIndex: nextZ } : w
        ),
      };
    }),
}));

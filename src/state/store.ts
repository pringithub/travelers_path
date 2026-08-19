import { create } from 'zustand';
import { explorers } from '../data/explorers';

interface AppState {
  selectedExplorerId: string;
  selectedJourneyId: string;
  playing: boolean;
  progress: number; // 0..1 along the selected journey
  select: (explorerId: string, journeyId?: string) => void;
  togglePlay: () => void;
  setProgress: (progress: number) => void;
}

const first = explorers[0];

export const useAppStore = create<AppState>((set) => ({
  selectedExplorerId: first.id,
  selectedJourneyId: first.journeys[0].id,
  playing: false,
  progress: 0,
  select: (explorerId, journeyId) =>
    set(() => {
      const explorer = explorers.find((e) => e.id === explorerId);
      const journey = journeyId
        ? explorer?.journeys.find((j) => j.id === journeyId)
        : explorer?.journeys[0];
      return {
        selectedExplorerId: explorerId,
        selectedJourneyId: journey?.id ?? explorer?.journeys[0]?.id ?? '',
        playing: false,
        progress: 0,
      };
    }),
  togglePlay: () => set((s) => ({ playing: !s.playing })),
  setProgress: (progress) => set({ progress }),
}));

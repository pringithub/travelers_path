import { create } from 'zustand';
import { explorers } from '../data/explorers';

export type MapStyle = 'basic' | 'political' | 'satellite';

export type MobileTab = 'explorers' | 'details' | 'map';

interface AppState {
  selectedExplorerId: string;
  selectedJourneyId: string;
  mapStyle: MapStyle;
  showLabels: boolean;
  mobileTab: MobileTab;
  sheetOpen: boolean;
  sheetExpanded: boolean;
  select: (explorerId: string, journeyId?: string) => void;
  setMapStyle: (mapStyle: MapStyle) => void;
  toggleLabels: () => void;
  setMobileTab: (tab: MobileTab) => void;
  setSheetOpen: (open: boolean) => void;
  setSheetExpanded: (expanded: boolean) => void;
}

const first = explorers[0];

export const useAppStore = create<AppState>((set) => ({
  selectedExplorerId: first.id,
  selectedJourneyId: first.journeys[0].id,
  mapStyle: 'basic',
  showLabels: true,
  mobileTab: 'explorers',
  sheetOpen: true,
  sheetExpanded: false,
  select: (explorerId, journeyId) =>
    set(() => {
      const explorer = explorers.find((e) => e.id === explorerId);
      const journey = journeyId
        ? explorer?.journeys.find((j) => j.id === journeyId)
        : explorer?.journeys[0];
      return {
        selectedExplorerId: explorerId,
        selectedJourneyId: journey?.id ?? explorer?.journeys[0]?.id ?? '',
        // On mobile, jumping to a new explorer should reveal its details.
        mobileTab: 'details',
        sheetOpen: true,
      };
    }),
  setMapStyle: (mapStyle) => set({ mapStyle }),
  toggleLabels: () => set((s) => ({ showLabels: !s.showLabels })),
  setMobileTab: (tab) => set({ mobileTab: tab, sheetOpen: true }),
  setSheetOpen: (open) => set((s) => ({ sheetOpen: open, sheetExpanded: open ? s.sheetExpanded : false })),
  setSheetExpanded: (expanded) => set({ sheetExpanded: expanded }),
}));

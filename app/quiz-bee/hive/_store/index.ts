import { create } from 'zustand';

interface HiveStore {
  showAllClearModal: boolean;
  setShowAllClearModal: (showAllClearModal: boolean) => void;
  // Define the store's state.
  // For example:
  // count: number;
  // Set the state's initial value.
  // For example:
  // count: 0;
}
export const StoreHive = create<HiveStore>((set) => ({
  showAllClearModal: false,
  setShowAllClearModal: (showAllClearModal) => set({ showAllClearModal }),
  // Define the store
}));

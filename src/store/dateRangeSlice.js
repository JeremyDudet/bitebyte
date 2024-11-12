export const dateRangeSlice = (set) => ({
  selectedDateRange: {
    from: new Date(),
    to: new Date(),
  },
  setSelectedDateRange: (range) => {
    if (!range) return; // Prevent setting null/undefined values
    set({ selectedDateRange: range });
  },
});

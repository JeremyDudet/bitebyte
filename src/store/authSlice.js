export const authSlice = (set) => ({
  session: null,
  loading: true,
  setSession: (session) => {
    if (!session) return; // Prevent setting null/undefined values
    set({ session, loading: false });
  },
});

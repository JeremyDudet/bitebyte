export const authSlice = (set) => ({
  session: null,
  loading: true,
  setSession: (session) => {
    set({ session, loading: false });
  },
});

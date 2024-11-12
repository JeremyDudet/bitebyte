export const promptSlice = (set) => ({
  prompt: "",
  setPrompt: (prompt) => {
    set({ prompt: prompt });
  },
});

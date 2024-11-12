export const recordingAudioSlice = (set) => ({
  recording: false,
  audioBlob: null,
  toggleRecording: () => {
    set((state) => ({ recording: !state.recording }));
  },
  setAudioBlob: (blob) => {
    set({ audioBlob: blob });
  },
});

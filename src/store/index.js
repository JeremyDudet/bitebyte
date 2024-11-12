import { create } from "zustand";
import { authSlice } from "./authSlice";
import { promptSlice } from "./promptSlice";
import { dateRangeSlice } from "./dateRangeSlice";
import { recordingAudioSlice } from "./recordingAudioSlice";

export const useStore = create((...a) => ({
  ...authSlice(...a),
  ...promptSlice(...a),
  ...dateRangeSlice(...a),
  ...recordingAudioSlice(...a),
}));

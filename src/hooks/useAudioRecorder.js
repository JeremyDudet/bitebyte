import { useState, useEffect } from "react";
import { useStore } from "../store";

export function useAudioRecorder() {
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [, setAudioChunks] = useState([]);
  const { recording, toggleRecording, setAudioBlob } = useStore();

  useEffect(() => {
    if (recording) {
      startRecording();
    } else if (mediaRecorder) {
      stopRecording();
    }
  }, [recording]);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      const chunks = [];

      recorder.ondataavailable = (e) => {
        if (e.data.size > 0) {
          chunks.push(e.data);
        }
      };

      recorder.onstop = () => {
        const audioBlob = new Blob(chunks, {
          type: "audio/webm;codecs=opus",
        });
        setAudioBlob(audioBlob);
        stream.getTracks().forEach((track) => track.stop());
      };

      recorder.start();
      setMediaRecorder(recorder);
      setAudioChunks(chunks);
    } catch (error) {
      console.error("Error accessing microphone:", error);
      toggleRecording();
    }
  };

  const stopRecording = () => {
    if (mediaRecorder && mediaRecorder.state !== "inactive") {
      mediaRecorder.stop();
      setMediaRecorder(null);
    }
  };
}

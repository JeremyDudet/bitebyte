import { useEffect } from "react";
import {
  PaperClipIcon,
  MicrophoneIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/20/solid";
import { StopIcon } from "@heroicons/react/24/outline";
import { useAudioRecorder } from "../hooks/useAudioRecorder";
import { transcribeAudio } from "../lib/whisper";
import { useStore } from "../store";

export default function InputArea() {
  const { prompt, setPrompt, recording, toggleRecording, audioBlob } =
    useStore();
  useAudioRecorder();

  const handleTranscription = async () => {
    if (audioBlob) {
      try {
        const transcription = await transcribeAudio(audioBlob);
        setPrompt(transcription);
      } catch (error) {
        console.error("Failed to transcribe audio:", error);
      }
    }
  };

  useEffect(() => {
    if (audioBlob && !recording) {
      handleTranscription();
    }
  }, [audioBlob, recording]);
  return (
    <form action="#" className="relative">
      <div className="mx-auto max-w-lg overflow-hidden rounded-lg border border-gray-300 shadow-sm focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500">
        <label htmlFor="prompt" className="sr-only">
          Prompt
        </label>
        <textarea
          id="prompt"
          name="prompt"
          rows={3}
          placeholder="Write a prompt..."
          className="block w-full resize-none border-0 
          py-2.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm/6
          max-h-[200px] overflow-y-auto"
          defaultValue={prompt}
          onChange={(event) => setPrompt(event.target.value)}
        />

        <div className="flex items-center justify-between space-x-3 border-t border-gray-200 px-2 py-2 sm:px-3 bg-white">
          <div className="flex">
            <button
              type="button"
              className="group -my-2 -ml-2 inline-flex items-center rounded-full px-3 py-2 text-left text-gray-400"
            >
              <PaperClipIcon
                aria-hidden="true"
                className="-ml-1 mr-2 h-5 w-5 group-hover:text-gray-500"
              />
              <span className="text-sm italic text-gray-500 group-hover:text-gray-600">
                Attach a file
              </span>
            </button>
          </div>
          <div className="flex gap-2">
            {recording ? (
              <button
                type="button"
                className="animate-pulse inline-flex items-center gap-x-1.5 rounded-md bg-red-100 px-2.5 py-1 text-sm text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-red-200"
                onClick={toggleRecording}
              >
                <StopIcon
                  aria-hidden="true"
                  className="-ml-1 mr-2 size-5 group-hover:text-gray-500"
                />
                Stop
              </button>
            ) : (
              <button
                type="button"
                className="inline-flex items-center gap-x-1.5 rounded-md bg-white px-2.5 py-1 text-sm text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                onClick={toggleRecording}
              >
                <MicrophoneIcon
                  aria-hidden="true"
                  className="-ml-1 mr-2 size-5 group-hover:text-gray-500"
                />
                Record
              </button>
            )}
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              <PaperAirplaneIcon
                aria-hidden="true"
                className="h-5 w-5 group-hover:text-gray-500"
              />
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

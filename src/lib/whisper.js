export async function transcribeAudio(audioBlob) {
  if (!import.meta.env.VITE_OPENAI_API_KEY) {
    throw new Error("OpenAI API key is not configured");
  }

  const formData = new FormData();
  // Convert webm to mp3 since Whisper API prefers mp3
  formData.append("file", audioBlob, "recording.mp3");
  formData.append("model", "whisper-1");
  formData.append("response_format", "json");

  try {
    const response = await fetch(
      "https://api.openai.com/v1/audio/transcriptions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
        },
        body: formData,
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        `API Error: ${errorData.error?.message || response.statusText}`
      );
    }

    const data = await response.json();
    return data.text;
  } catch (error) {
    console.error("Transcription error:", error);
    throw error;
  }
}

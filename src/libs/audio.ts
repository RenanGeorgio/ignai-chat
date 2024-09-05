import { AudioProcessor } from "@twilio/voice-sdk";

export default class BackgroundAudioProcessor implements AudioProcessor {
  private audioContext: AudioContext | undefined;
  private background: MediaElementAudioSourceNode | undefined;
  private destination: MediaStreamAudioDestinationNode | undefined;

  constructor() {
    if (!this.audioContext) {
      this.audioContext = new AudioContext();
    }
  }

  async createProcessedStream(stream: MediaStream): Promise<MediaStream | undefined> {
    const audioEl = new Audio('/background.mp3');
    audioEl.addEventListener('canplaythrough', () => audioEl.play());
    this.background = this.audioContext?.createMediaElementSource(audioEl);

    this.destination = this.audioContext?.createMediaStreamDestination();

    if (this.destination != undefined) {
      this.background?.connect(this.destination);
    }

    return this.destination?.stream;
  }

  async destroyProcessedStream(stream: MediaStream): Promise<void> {
    this.background?.disconnect();
    this.destination?.disconnect();
  }
}
import { useState, useEffect } from "react";
import Meyda from "meyda";

export const useLoudness = () => {
  const [analyser, setAnalyser] = useState<any>(null);
  const [running, setRunning] = useState<boolean>(false);
  const [loudness, setLoudness] = useState<number>(0);

  const getMedia = async () => {
    try {
      return await navigator?.mediaDevices?.getUserMedia({
        audio: true,
        video: false
      });
    } catch (err) {
      console.error("Error:", err);
    }
  };

  useEffect(() => {
    const audioContext = new AudioContext();

    if (audioContext == undefined) {
      return
    }

    const highPass = audioContext?.createBiquadFilter();
    highPass?.frequency?.setValueAtTime(300, audioContext?.currentTime);

    const lowPass = audioContext?.createBiquadFilter();
    lowPass?.frequency?.setValueAtTime(3400, audioContext?.currentTime);

    let newAnalyser: any = undefined;

    getMedia()?.then((stream?: MediaStream) => {
      if (audioContext?.state === "closed") {
        return;
      }

      const source = audioContext?.createMediaStreamSource(stream as MediaStream);

      source?.connect(highPass);
      highPass?.connect(lowPass);

      newAnalyser = Meyda?.createMeydaAnalyzer({
        audioContext: audioContext,
        source: lowPass,
        bufferSize: 8192,
        featureExtractors: ["loudness"],
        callback: (features: any) => {
          console.log(features);
          setLoudness(
            (loudness: number) => (loudness + features?.loudness?.total * 0.2) / 2
          );
        }
      });

      setAnalyser(newAnalyser);
    });

    return () => {
      if (newAnalyser) {
        newAnalyser?.stop();
      }

      if (audioContext) {
        audioContext?.close();
      }
    };
  }, []);

  useEffect(() => {
    if (analyser) {
      if (running) {
        analyser?.start();
      } else {
        analyser?.stop();
      }
    }
  }, [running, analyser]);

  return [running, setRunning, loudness];
}

export const useMeyda = () => {
  const [analyser, setAnalyser] = useState<any>(null);
  const [running, setRunning] = useState<boolean>(false);
  const [features, setFeatures] = useState<any>(null);

  const getMedia = async () => {
    try {
      return await navigator?.mediaDevices?.getUserMedia({
        audio: true,
        video: false
      });
    } catch (err) {
      console.error("Error:", err);
    }
  };

  useEffect(() => {
    const audioContext = new AudioContext();

    if (audioContext == undefined) {
      return
    }

    let newAnalyser: any = undefined;

    getMedia()?.then(stream => {
      if (audioContext?.state === "closed") {
        return;
      }

      const source = audioContext?.createMediaStreamSource(stream as MediaStream);

      newAnalyser = Meyda?.createMeydaAnalyzer({
        audioContext: audioContext,
        source: source,
        bufferSize: 8192,
        featureExtractors: ["loudness"],
        callback: (features: any) => {
          console.log(features);
          setFeatures(features);
        }
      });

      setAnalyser(newAnalyser);
    });

    return () => {
      if (newAnalyser) {
        newAnalyser?.stop();
      }

      if (audioContext) {
        audioContext?.close();
      }
    };
  }, []);

  useEffect(() => {
    if (analyser) {
      if (running) {
        analyser?.start();
      } else {
        analyser?.stop();
      }
    }
  }, [running, analyser]);

  return [running, setRunning, features];
}

export const useMuteWarning = (loudness: number, running: boolean) => {
  const [showMuteWarning, setShowMuteWarning] = useState<boolean>(false);

  useEffect(() => {
    if (loudness > 6 && running) {
      setShowMuteWarning(true);
    }
  }, [loudness, running]);

  useEffect(() => {
    let timeout: any = undefined;

    if (showMuteWarning) {
      timeout = setTimeout(() => {
        setShowMuteWarning(false);
      }, 5000);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [showMuteWarning]);

  return [showMuteWarning];
}
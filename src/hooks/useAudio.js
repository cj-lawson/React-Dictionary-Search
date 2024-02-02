import { useEffect, useState } from "react";

const useAudio = (src) => {
  const [audio, setAudio] = useState(null);

  useEffect(() => {
    if (!src) return undefined;
    const newAudio = new Audio(src);
    setAudio(newAudio);

    return () => newAudio.pause();
  }, [src]);

  return audio;
};

export default useAudio;

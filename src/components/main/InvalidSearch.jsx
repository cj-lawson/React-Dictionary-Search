import { useLottie } from "lottie-react";
import catPastry from "../../animations/catPastry.json";

const InvalidSearch = () => {
  // Lottie Animation
  const options = {
    loop: true,
    autoplay: true,
    animationData: catPastry,
  };
  const { View } = useLottie(options);
  return (
    <div className="flex max-w-[46rem] grow flex-col items-center gap-6">
      <span className="w-48">{View}</span>
      <h1 className="text-xl font-bold">No Definitions Found</h1>
      <p className="text-center text-lg text-gray-silver">
        Sorry, we couldn&apos;t find any definitions for the word you were
        looking for. You can try searching again, or looking for a new word
      </p>
    </div>
  );
};

export default InvalidSearch;

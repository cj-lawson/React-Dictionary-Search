import { useLottie } from "lottie-react";
import catPastry from "../../animations/catPastry.json";

const EmptySearch = () => {
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
      <h1 className="text-xl font-bold">Dictionary Search</h1>
      <p className="text-center text-lg text-gray-silver">
        Get started by searching for a word and we&apos;ll grab the definition
        for you.
      </p>
    </div>
  );
};

export default EmptySearch;

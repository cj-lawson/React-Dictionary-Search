import useSearchWordStore from "../../store/searchWord";
import useAudio from "../../hooks/useAudio";
import EmptySearch from "./EmptySearch";
import InvalidSearch from "./InvalidSearch";
import playIcon from "/play-icon.svg";

const SearchResult = () => {
  const result = useSearchWordStore((state) => state.result);
  const error = useSearchWordStore((state) => state.error);

  const pronunciation = result?.phonetics.find(
    (p) => p.text?.length && p.audio?.length
  );

  const audio = result?.phonetics.find(
    (p) => p.text?.length && p.audio?.length
  );
  const audioSrc = audio?.audio;
  const pronounceAudio = useAudio(audioSrc);

  const generateKey = (pre) => {
    return `${pre}_${new Date().getTime()}`;
  };

  if (result === undefined) {
    return <EmptySearch />;
  }

  if (error) {
    return <InvalidSearch />;
  }

  return (
    <div className="w-full">
      {/* header */}
      <div className="flex flex-row justify-between">
        <div className="flex flex-col space-y-1">
          <h1 className="text-3xl font-bold">{result.word}</h1>
          <h1 className="text-[#BDC1C5]">{pronunciation?.text}</h1>
        </div>
        {pronounceAudio && (
          <button
            type="button"
            aria-label="play word pronunciation"
            onClick={() => pronounceAudio.play()}
          >
            <img src={playIcon} alt="" className="w-12" />
          </button>
        )}
      </div>
      {/* End header */}
      {/* Begin noun */}
      {result.meanings.map((meaning) => (
        <section className="mt-8" key={generateKey(meaning.partOfSpeech)}>
          <div className="flex flex-row items-center">
            <h2 className="font-bold italic text-lg mr-6">
              {meaning.partOfSpeech}
            </h2>
            <span className="h-[1px] w-full my-8 bg-gray-200 border-0 dark:bg-gray-700">
              {" "}
            </span>
          </div>
          <div>
            <h3 className="mb-4 text-lg">Meaning</h3>
            <div className="pl-[16px]">
              <ul className="list-disc marker:text-[#D6D8DC] list-outside font-normal space-y-6">
                {meaning.definitions.map(({ definition, ...rest }) => (
                  <li key={generateKey(definition)}>
                    <p>{definition}</p>
                    {"example" in rest && (
                      <p className="mt-2 text-gray-silver sm:text-lg">
                        &ldquo;{rest.example}&rdquo;
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {meaning.synonyms.length > 0 && (
            <div className="py-4 px-4 mt-7 flex flex-col bg-[#b2dfdb] rounded-lg">
              <h3 className="mb-4 text-lg text-[#004d40]">Synonyms</h3>
              <div className="flex flex-row space-x-2.5 mr-8">
                {[...new Set(meaning.synonyms)].map((synonym) => (
                  <div
                    className="bg-[#80cbc4] rounded-md"
                    key={generateKey(synonym)}
                  >
                    <h3 className="p-2 text-sm text-[#004d40]">{synonym}</h3>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>
      ))}
    </div>
  );
};

export default SearchResult;

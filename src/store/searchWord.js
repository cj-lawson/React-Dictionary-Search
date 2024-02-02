import { create } from "zustand";

const useSearchWordStore = create((set) => ({
  query: "test",
  result: undefined,
  setQuery: (query) => set({ query }),
  setResult: (result) => {
    set({ result });
    console.log(result);
  },
}));

export default useSearchWordStore;

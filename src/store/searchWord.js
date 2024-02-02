import { create } from "zustand";

const useSearchWordStore = create((set) => ({
  query: "",
  result: undefined,
  setQuery: (query) => set({ query }),
  setResult: (result) => {
    set({ result });
    console.log(result);
  },
  error: false,
  setError: (error) => set({ error }),
  clearError: () => set({ error: null }),
}));

export default useSearchWordStore;

export const storage = {
   setItem: (name: string, item: unknown) => {
      localStorage.setItem(name, JSON.stringify(item));
   },
   getItem: (name: string) => {
      const item = localStorage.getItem(name);
      if (item) return JSON.parse(item);
   },
};

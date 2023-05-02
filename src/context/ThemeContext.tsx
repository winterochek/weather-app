import { FC, ReactNode, createContext, useEffect, useState } from 'react';
import { storage } from '../storage';

interface FCProps {
   children: ReactNode;
}

export enum Theme {
   LIGHT = 'light',
   DARK = 'dark',
}

type ContextType = {
   theme: Theme;
   changeTheme: () => void;
};

export const ThemeContext = createContext<ContextType>({
   theme: storage.getItem('theme') || Theme.LIGHT,
   // eslint-disable-next-line @typescript-eslint/no-empty-function
   changeTheme: () => {},
});

export const ThemeContextProvider: FC<FCProps> = ({ children }) => {
   const [theme, setTheme] = useState<Theme>(
      storage.getItem('theme') || Theme.LIGHT
   );

   const changeTheme = async () => {
      storage.setItem('theme', theme === 'light' ? Theme.DARK : Theme.LIGHT);
      setTheme(theme === 'light' ? Theme.DARK : Theme.LIGHT);
   };

   useEffect(() => {
      const setCSSProperties = () => {
         const root = document.querySelector(':root') as HTMLElement;
         const components = [
            'body-background',
            'components-background',
            'card-background',
            'card-shadow',
            'text-color',
         ];
         components.forEach((component) => {
            root.style.setProperty(
               `--${component}-default`,
               `var(--${component}-${theme})`
            );
         });
      };
      setCSSProperties();
   }, [theme]);

   return (
      <ThemeContext.Provider value={{ theme, changeTheme }}>
         {children}
      </ThemeContext.Provider>
   );
};

export default ThemeContextProvider;

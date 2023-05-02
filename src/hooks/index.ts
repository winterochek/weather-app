import { useContext } from 'react';
import { Theme, ThemeContext } from '../context/ThemeContext';

export const useTheme = (): [Theme, () => void] => {
   const { theme, changeTheme } = useContext(ThemeContext);

   return [theme, changeTheme];
};

import { FC } from 'react';
import Select from 'react-select';
import s from './Header.module.scss';
import GlobalSVGSelector from '../../assets/icons/global/GlobalSVGSelector';
import { useTheme } from '../../hooks';
import { Theme } from '../../context/ThemeContext';

const Header: FC = () => {
   const [theme, changeTheme] = useTheme();
   const colourStyles = {
      control: (styles: any) => ({
         ...styles,
         backgroundColor:
            theme === Theme.DARK ? '#4f4f4f' : 'rgba(71, 147, 255, 0.2)',
         width: '194px',
         height: '37px',
         border: 'none',
         borderRadius: '10px',
         zIndex: 100,
      }),
      singleValue: (styles: any) => ({
         ...styles,
         color: theme === Theme.DARK ? '#fff' : '#000',
      }),
   };

   const options = [
      { value: 'Kyiv', label: 'Kyiv' },
      { value: 'Lviv', label: 'Lviv' },
      { value: 'Dnipro', label: 'Dnipro' },
   ];

   return (
      <header className={s.header}>
         <div className={s.wrapper}>
            <div className={s.logo}>
               <GlobalSVGSelector id='header-logo' />
            </div>
            <div className={s.title}>React Weather</div>
         </div>
         <div className={s.wrapper}>
            <div className={s.change_theme} onClick={changeTheme}>
               <GlobalSVGSelector id='change-theme' />
            </div>
            <Select
               defaultValue={options[0]}
               styles={colourStyles}
               options={options}
            />
         </div>
      </header>
   );
};

export default Header;

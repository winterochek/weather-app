import { FC, Fragment } from 'react';
import s from './Popup.module.scss';
import ThisDayItem from '../../pages/Home/components/ThisDayInfo/ThisDayItem';
import { Item } from '../../pages/Home/components/ThisDayInfo/ThisDayInfo';
import GlobalSVGSelector from '../../assets/icons/global/GlobalSVGSelector';

const Popup: FC = () => {
   const items: Item[] = [
      {
         icon_id: 'temp',
         name: 'Temperature',
         value: '20° - it feels like 17°',
      },
      {
         icon_id: 'pressure',
         name: 'Pressure',
         value: '765 mm Hg - normal',
      },
      {
         icon_id: 'precipitation',
         name: 'Precipitation',
         value: 'No precipitation',
      },
      {
         icon_id: 'wind',
         name: 'Wind',
         value: '3 m/s southwest - light wind',
      },
   ];
   return (
      <>
         <div className={s.popup}>
            <div className={s.day}>
               <div className={s.day__temp}>20°</div>
               <div className={s.day__name}>Wednesday</div>
               <div className={s.img}>
                  <GlobalSVGSelector id='sun' />
               </div>
               <div className={s.day__time}>
                  Time: <span>21:54</span>
               </div>
               <div className={s.day__city}>
                  City: <span>Kyiv</span>
               </div>
            </div>
            <div className={s.this__day_info_items}>
               {items.map((item) => (
                  <Fragment key={item.icon_id}>
                     <ThisDayItem item={item} />
                  </Fragment>
               ))}
            </div>
            <div className={s.close}>
               <GlobalSVGSelector id='close' />
            </div>
         </div>
         <div className={s.blur} />
      </>
   );
};

export default Popup;

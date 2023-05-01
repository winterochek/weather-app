import { FC, Fragment } from 'react';
import Cloud from '../../../../assets/images/cloud.png';
import s from './ThisDayInfo.module.scss';
import ThisDayItem from './ThisDayItem';

// interface ThisDayInfoProps {}

export interface Item {
   icon_id: string;
   name: string;
   value: string;
}

const ThisDayInfo: FC = () => {
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
      <div className={s.this__day_info}>
         <div className={s.this__day_info_items}>
            {items.map((item) => (
               <Fragment key={item.icon_id}>
                  <ThisDayItem item={item} />
               </Fragment>
            ))}
         </div>
         <img className={s.cloud} src={Cloud} alt='Cloud' />
      </div>
   );
};

export default ThisDayInfo;

import { FC } from 'react';
import s from './Days.module.scss';
import { Day } from './Days';
import GlobalSVGSelector from '../../../../assets/icons/global/GlobalSVGSelector';

interface CardProps {
   day: Day;
}

const Card: FC<CardProps> = ({ day }) => {
   return (
      <div className={s.card}>
         <div className={s.day}>{day.day}</div>
         <div className={s.day__info}>{day.day_info}</div>
         <div className={s.img}>
            <GlobalSVGSelector id={day.icon_id} />
         </div>
         <div className={s.day__temp}>{day.temp_day}</div>
         <div className={s.night__temp}>{day.temp_night}</div>
         <div className={s.info}>{day.info}</div>
      </div>
   );
};

export default Card;

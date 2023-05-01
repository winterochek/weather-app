import { FC } from 'react';
import { Item } from './ThisDayInfo';
import s from './ThisDayInfo.module.scss';
import IndicatorSVGSelector from '../../../../assets/icons/indicators/IndicatorSVGSelector';

interface ThisDayItemProps {
   item: Item;
}

const ThisDayItem: FC<ThisDayItemProps> = ({ item }) => {
   return (
      <div className={s.item}>
         <div className={s.indicator}><IndicatorSVGSelector id={item.icon_id} /></div>
         <div className={s.indicator__name}>{item.name}</div>
         <div className={s.indicator__value}>{item.value}</div>
      </div>
   );
};

export default ThisDayItem;

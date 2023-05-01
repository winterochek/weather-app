import { FC } from 'react';
import s from './ThisDay.module.scss';
import GlobalSVGSelector from '../../../../assets/icons/global/GlobalSVGSelector';

// interface ThisDayProps {}

const ThisDay: FC = () => {
   return (
      <div className={s.this__day}>
         <div className={s.top__block}>
            <div className={s.top__block_wrapper}>
               <div className={s.this__temp}>20°</div>
               <div className={s.this__day_name}>Today</div>
            </div>
            <GlobalSVGSelector id='sun' />
         </div>

         <div className={s.bottom__block}>
            <div className={s.this__time}>
               Time: <span>21:54</span>
            </div>
            <div className={s.this__city}>
               City: <span>Kyiv</span>
            </div>
         </div>
      </div>
   );
};

export default ThisDay;

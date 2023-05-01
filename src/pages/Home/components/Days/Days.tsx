import { FC, Fragment } from 'react';
import s from './Days.module.scss';
import Card from './Card';
import Tabs from './Tabs';
// interface DaysProps {

// }

export interface Day {
   day: string;
   day_info: string;
   icon_id: string;
   temp_day: string;
   temp_night: string;
   info: string;
}

const Days: FC = () => {
   const days: Day[] = [
      {
         day: 'Mon',
         day_info: '28 авг',
         icon_id: 'sun',
         temp_day: '+18',
         temp_night: '+15',
         info: 'Облачно',
      },
      {
         day: 'Tue',
         day_info: '29 авг',
         icon_id: 'small_rain_sun',
         temp_day: '+18',
         temp_night: '+15',
         info: 'небольшой дождь и солнце',
      },
      {
         day: 'Wed',
         day_info: '30 авг',
         icon_id: 'small_rain',
         temp_day: '+18',
         temp_night: '+15',
         info: 'небольшой дождь',
      },
      {
         day: 'Th',
         day_info: '28 авг',
         icon_id: 'mainly_cloudy',
         temp_day: '+18',
         temp_night: '+15',
         info: 'Облачно',
      },
      {
         day: 'Fri',
         day_info: '28 авг',
         icon_id: 'rain',
         temp_day: '+18',
         temp_night: '+15',
         info: 'Облачно',
      },
      {
         day: 'Sat',
         day_info: '28 авг',
         icon_id: 'sun',
         temp_day: '+18',
         temp_night: '+15',
         info: 'Облачно',
      },
      {
         day: 'Sun',
         day_info: '28 авг',
         icon_id: 'sun',
         temp_day: '+18',
         temp_night: '+15',
         info: 'Облачно',
      },
   ];
   return (
      <>
         <Tabs />
         <div className={s.days}>
            {days.map((day, index) => (
               <Fragment key={index}>
                  <Card day={day} />
               </Fragment>
            ))}
         </div>
      </>
   );
};

export default Days;

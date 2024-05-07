'use client'

import { eachDayOfInterval } from 'date-fns';
import { useState } from 'react';
import { DateRange } from 'react-date-range'

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css'

const SelectCalendar = ({ reservation }: { reservation: | {
  starDate: Date;
  endDate: Date;
}[] | undefined; }) => {

  const [state, setState] = useState([
    {
      starDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);

  let  disableDates: Date[] = [];

  reservation?.forEach((reservationItem) => {
    const dateRange = eachDayOfInterval({
      start: new Date(reservationItem.starDate),
      end: new Date(reservationItem.endDate),
    });

    disableDates = [...disableDates, ...dateRange]
  });

  return (
    <>
    <input type="hidden" name='startDate' value={state[0].starDate.toISOString()} />
    <input type="hidden" name='endDate' value={state[0].endDate.toISOString()} />
      <DateRange 
      showDateDisplay={false}
      date={new Date()}
      rangeColors={['#FF5A5F']}
      ranges={state}
      onChange={(item) => setState([item.selection] as any)}
      minDate={new Date()}
      direction='vertical'
      disabledDates={disableDates}
    />
    </>
  )
}

export default SelectCalendar
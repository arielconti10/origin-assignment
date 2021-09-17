import React, { useState } from 'react';
import moment from 'moment';

import {
  Container,
  InputLabel,
  InputContainer,
  PreviousMonth,
  MonthSelected,
  NextMonth,
  Month,
  Year,
} from './styles';

export function MonthSelector(): JSX.Element {
  const currentDate = new Date();

  const [month, setMonth] = useState(moment(currentDate));
  const [currentMonth, setCurrentMonth] = useState(month.format('MMMM'));

  function handleNextMonth() {
    const nextMonth = month.add(1, 'M').format('MMMM');
    console.log(nextMonth);
    setCurrentMonth(nextMonth);
  }

  function handlePrevMonth() {
    return true;
  }

  console.log(month);

  return (
    <Container>
      <InputLabel>Reach Goal By</InputLabel>

      <InputContainer>
        <PreviousMonth>{'<'}</PreviousMonth>
        <MonthSelected>
          <Month>{month.format('MMMM')}</Month>
          <Year>2021</Year>
        </MonthSelected>
        <NextMonth
          onClick={() => {
            console.log('next month');
            handleNextMonth();
          }}
        >
          {'>'}
        </NextMonth>
      </InputContainer>
    </Container>
  );
}

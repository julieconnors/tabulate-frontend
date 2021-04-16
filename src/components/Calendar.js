import { DateRangePicker } from 'react-date-range';
import { addDays } from 'date-fns';
import { useState } from 'react';

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file


// import { Calendar } from 'react-date-range';
// import { DateRange } from 'react-date-range';

function Calendar() {

    const [state, setState] = useState([
        {
          startDate: new Date(),
          endDate: addDays(new Date(), 7),
          key: 'selection'
        }
      ]);
      return (
        <DateRangePicker ranges={state} onChange={item => setState([item.selection])} showSelectionPreview={true}/>

      )


}

export default Calendar;
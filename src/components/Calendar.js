import { DateRangePicker } from 'react-date-range';
import { addDays } from 'date-fns';
import { useState } from 'react';

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file


// import { Calendar } from 'react-date-range';
// import { DateRange } from 'react-date-range';

function Calendar(props) {
    
    const [state, setState] = useState([
        {
          startDate: new Date(),
          endDate: addDays(new Date(), 0),
          key: 'selection'
        }
      ]);

      // const handleOnSubmit = () => {
      //   let data = [...state]
      //   // debugger

      //   props.collectDateRange(data)
      // }
      // on submit, pass date ranges from local state to parent component

      return (
        <div>
          <form >
            <DateRangePicker ranges={state} onChange={item => {
            setState([item.selection])
            props.collectDateRange(state)
            }} showSelectionPreview={true}/><br></br>
            <input type="submit" value="Select Dates"/>
          </form>
        </div>
      )


}

export default Calendar;
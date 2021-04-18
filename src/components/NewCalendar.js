import { DateRangePicker } from 'react-date-range';
import React, { Component } from 'react';

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
 
class NewCalendar extends Component {
  handleSelect = (ranges) => {
    console.log(ranges.selection);
    // {
    //   selection: {
    //     startDate: [native Date Object],
    //     endDate: [native Date Object],
    //   }
    // }

    //pass ranges back to parent
    this.props.collectDateRange(ranges.selection)

    
  }
  render(){
    const selectionRange = {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    }
    return (
      <DateRangePicker
        ranges={[selectionRange]}
        onChange={this.handleSelect}
      />
    )
  }
}

export default NewCalendar;
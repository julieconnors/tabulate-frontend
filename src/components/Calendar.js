import { DateRangePicker } from 'react-date-range';
import React, { Component } from 'react';

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
 
class Calendar extends Component {

  state = {
    selectionRange : {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection"
    }
  }

  handleSelect = (ranges) => {    
    this.setState({
      selectionRange : {
        startDate: ranges.selection.startDate,
        endDate: ranges.selection.endDate,
        key: "selection"
      }
    })

    //pass ranges back to parent
    this.props.collectDateRange(ranges.selection)    
  }
    
  render(){
    return (
      <DateRangePicker ranges={[this.state.selectionRange]} onChange={this.handleSelect} />
    )
  }
}

export default Calendar;
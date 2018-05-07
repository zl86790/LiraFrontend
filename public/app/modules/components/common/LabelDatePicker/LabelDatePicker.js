import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
 
import 'react-datepicker/dist/react-datepicker.css';
 
// CSS Modules, react-datepicker-cssmodules.css
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
 
class LabelDatePicker extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    	dpvalue: moment()
    };
    this.clickLabel = this.clickLabel.bind(this);
    this.blurPicker = this.blurPicker.bind(this);
    this.state = {
		showLabel:true,
		showPicker:'none'
	};  
  }
  
  clickLabel(){
	  console.log("click label ... ");
	  this.setState({
			showLabel:'none',
			showPicker:true,
			dpvalue: moment()
		  });
	  setTimeout("document.querySelector('#"+this.props.pickerId+"').focus()",1)
  }
  
  blurPicker(){
	  this.setState({
		showLabel:true,
		showPicker:'none'
	  });
  }
 
  handleChange(date) {
    this.setState({
      startDate: date
    });
  }
 
  render() {
    return (
    		<div>
    			<div style={{display:this.state.showLabel}} onClick={this.clickLabel}>{this.props.initValue}</div>
    			<div style={{display:this.state.showPicker}} onBlur={this.blurPicker}>
	    			<DatePicker
	    				id={this.props.pickerId} name={this.props.pickerName} ref={this.props.pickerRef}
				        selected={this.state.dpvalue}
				        onChange={this.handleChange}
		    		/>
		    	</div>
    		</div>
    );
  }
}

export default LabelDatePicker;
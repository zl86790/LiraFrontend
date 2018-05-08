import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
 
import 'react-datepicker/dist/react-datepicker.css';
 
// CSS Modules, react-datepicker-cssmodules.css
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
 
class LabelDatePicker extends React.Component {
  constructor (props) {
    super(props)

    this.clickLabel = this.clickLabel.bind(this);
    this.blurPicker = this.blurPicker.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
		showLabel:true,
		showPicker:'none',
		dpvalue: this.props.initValue
	};  
  }
  
  clickLabel(){
	  console.log("click label ... "+moment());
	  this.setState({
			showLabel:'none',
			showPicker:true,
			dpvalue: moment(this.props.initValue)
		  });
	  setTimeout("document.querySelector('#"+this.props.pickerId+"').focus()",1)
  }
  
  blurPicker(){
	  let oldValue = this.props.initValue;
	  let newValue = document.querySelector('#'+this.props.pickerId).value;
	  console.log(oldValue+ ":::"+ newValue);
	  if(oldValue==newValue){
		  this.setState({
			showLabel:true,
			showPicker:'none'
		  });
	  }
  }
 
  handleChange(date) {
    this.setState({
    	dpvalue: date
    });
    this.props.callBackFunction();
    this.setState({
		showLabel:true,
		showPicker:'none'
	  });
  }
 
  render() {
    return (
    		<div>
    			<div style={{display:this.state.showLabel}} onClick={this.clickLabel}>{this.props.initValue}</div>
    			<div style={{display:this.state.showPicker}}>
	    			<DatePicker  onBlur={this.blurPicker}
	    				id={this.props.pickerId} name={this.props.pickerName} ref={this.props.pickerRef}
				        selected={this.state.dpvalue}
				        onChange={this.handleChange}
	    				dateFormat="YYYY-MM-DD"
		    		/>
		    	</div>
    		</div>
    );
  }
}

export default LabelDatePicker;
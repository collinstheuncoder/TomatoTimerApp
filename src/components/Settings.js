import React, { Component } from 'react';

class Settings extends Component {
	constructor(props) {
		super(props); 

		this.state = {
			workDuration: 25,
			breakDuration: 5,
		};

		this.onChangeSettings  = this.onChangeSettings.bind(this);
		this.onSubmitSettings  = this.onSubmitSettings.bind(this);	
	}

	onChangeSettings(e) {
		this.setState({
			[e.target.name]: e.target.value,
		});
	}

	onSubmitSettings(e) {
		e.preventDefault();
		console.log(this.state);
	}

	render() {
		const { 
			workDuration, 
			breakDuration,  
		} = this.state; 

		return (
			<div className="settings">
				<h3>Settings</h3>
				<form>
					<div className="form-group">
						<label>Work Duration</label>
						<select 
							name="workDuration" 
							value={ workDuration }
							onChange={ this.onChangeSettings }
							className="form-control"
						>
							<option value="25">25 minutes</option>
							<option value="30">30 minutes</option>
							<option value="45">45 minutes</option>
							<option value="60">60 minutes</option>
						</select>
					</div>
					<div className="form-group">
						<label>Break Duration</label>
						<select 
							name="breakDuration" 
							value={ breakDuration }
							onChange={ this.onChangeSettings }
							className="form-control"
						>
							<option value="5">5 minutes</option>
							<option value="10">10 minutes</option>
							<option value="15">15 minutes</option>
							<option value="20">20 minutes</option>
						</select>
					</div>
					<div className="form-group">
						<button 
							type="button" 
							className="btn btn-outline-danger" 
							onClick={ this.onSubmitSettings }
						>
							Submit
						</button>
					</div>
				</form>	
			</div>
		);
	}
}

export default Settings;
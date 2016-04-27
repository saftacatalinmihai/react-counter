import React from 'react';

export default React.createClass({
	getInitialState() {
	    return {
	        count: 1, 
			increment_by: 1,
			decrement_by: 1,
	    };
	},
	componentWillUnmount() {
		alert('I knew Dan lied about hot reloading.');
	},
	increment() {
		this.setState({count: this.state.count + this.state.increment_by});
	},
	decrement() {
		const next_count = this.state.count - this.state.decrement_by;
		if (next_count >= 0 ) {
			this.setState({count: next_count});
		}
	},
	setIncVal(e) {
		this.setState({increment_by: parseInt(e.target.value)});
	},
	setDecVal(e) {
		this.setState({decrement_by: parseInt(e.target.value)});
	},
	render() {
		return  <div>
					<h2>Counter</h2>
					<label>Increment by:</label><br/><input type='text' onChange={this.setIncVal} value={this.state.increment_by}></input>
					<br/>
					<br/>
					<label>Decrement by:</label><br/><input type='text' onChange={this.setDecVal} value={this.state.decrement_by}></input>

					<h3>Count: {this.state.count}</h3>
					<button onClick={this.increment}>Increment</button>
					<button onClick={this.decrement}>Decrement</button>
				</div>
	}
});
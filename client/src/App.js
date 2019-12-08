import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

console.log('front end loaded!');
class App extends Component {
	state = {
		data: null
	};

	componentDidMount() {
		console.log('mounting component');
		this.hitBackend()
			.then(res => this.setState({ data: res.express }))
			.catch(err => console.log('nope', err));
	}

	hitBackend = async () => {
		console.log('hit the back end');
		const response = await fetch('/test_backend');
		const body = await response.json();

		if (response.status !== 200) {
			throw Error(body.message);
		}

		return body;
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to React</h1>

					<p className="App-intro">{this.state.data}</p>
				</header>
			</div>
		);
	}
}

export default App;

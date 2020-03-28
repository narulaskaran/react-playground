import React, { Component } from 'react'
import Table from './Table'

const PageTitle = () => {
	return (
		<div className="title text-center">
			<h1>Welcome to the React Playground!</h1>
		</div>
	)
}

class App extends Component {
	render() {
		const entries = [
			{
				fname: 'Karan',
				lname: 'Narula'
			},
			{
				fname: 'Sophia',
				lname: 'Sevier'
			}
		]

		return (
			<div className="App">
				<PageTitle />
				<div className="container">
					<Table entry_data={entries} />
				</div>
			</div>
		)
	}
}

export default App
import logo from './logo.svg'
import './App.css'

// export const App = () => {
// 	return (
// 		// декларотивный стиль
// 		<div className="App">
// 			<header className="App-header">
// 				<img src={logo} className="App-logo" alt="logo" />
// 				<p>
// 					Edit <code>src/App.js</code> and save to reload.
// 				</p>
// 				<a
// 					className="App-link"
// 					href="https://reactjs.org"
// 					target="_blank"
// 					rel="noopener noreferrer"
// 				>
// 					Learn React
// 				</a>
// 				<span>
// 					{getCurrentYear()}
// 				</span>
// 			</header>
// 		</div>
// 	)


// }


import React from 'react';

export const App = () => {
	return React.createElement(
		'div',
		{ className: 'App' },
		React.createElement(
			'header',
			{ className: 'App-header' },
			React.createElement('img', { src: logo, className: 'App-logo', alt: 'logo' }),
			React.createElement(
				'p',
				null,
				'Edit ',
				React.createElement('code', null, 'src/App.js'),
				' and save to reload.'
			),
			React.createElement(
				'a',
				{
					className: 'App-link',
					href: 'https://reactjs.org',
					target: '_blank',
					rel: 'noopener noreferrer'
				},
				'Learn React'
			),
			React.createElement('span', null, getCurrentYear())
		)
	)
}


//императивный стиль
const getCurrentYear = () => {
	let date = new Date()
	return date.getFullYear()
}



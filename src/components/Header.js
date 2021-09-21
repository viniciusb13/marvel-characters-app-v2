import React from 'react'
import marvelLogo from '../marvel.svg'
import { Link } from 'react-router-dom'

const Header = () => {
	return (
		<>
			<header className="header">
				<Link to={'/'} >
					<img src={marvelLogo} alt="logo marvel" width="150px"/>
				</ Link>
			</header>
		</>
	)
}

export default Header

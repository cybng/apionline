import React from 'react'
import {Link} from "react-router-dom"

export default function Header() {
	return (
		<div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 text-white p-2 drop-shadow-sm">
		<nav className="container mx-auto flex justify-between items-center p-2">
			<Link to="/" className="text-xl text-white">ApiOnline.in</Link>
			<div>
			<Link to="/login" className="bg-gradient-to-r from-indigo-500 to-indigo-500 rounded-sm px-5 py-2 text-sm">Login</Link>
			</div>
		</nav>
			
		</div>
	)
}
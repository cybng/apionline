import React from 'react'
import Header from "./Header"
import { Link } from "react-router-dom"
export default function Reg() {
	return (
		<div className="bg-slate-100">
		<Header/>

		<div className="bg-slate-50 flex justify-center items-center py-10">
		<div className="w-4/12 bg-white drop-shadow-sm p-5">
		<div className="flex justify-center items-center pb-5 text-blue-500">Login now</div>
		<div className=" w-full">
		<div className="flex-col">
		<div>
		<div className="text-sm text-slate-500 py-2">Email or username</div>
		<input type="text" className="w-full px-2 border border-slate-100 text-sm p-2 rounded-sm"/>
		</div>
		</div>
		<div>
		<div className="text-sm text-slate-500 py-2">Password</div>
		<input type="password" className="w-full px-2 border border-slate-100 text-sm p-2 rounded-sm" />
		</div>
		<div>
		<label className="text-sm text-slate-500 py-2">Choose for</label>
		<div className="flex justify-between items-center">
		<select type="text" className="w-6/12 px-2 border border-slate-100 text-sm py-2 rounded-sm">
		<option></option>
		<option>Supplier</option>
		<option>Buyer</option>
		<option>Admin</option>
		</select> 
		<button className="text-sm bg-blue-500  px-5 text-right py-2 text-white rounded-sm">Login</button>
		</div>
		</div>
		<div className="text-center p-5">
			<p className="text-sm">Or </p>
			<div className="flex justify-center items-center text-sm p-2 space-x-5">
				<Link to="/reg" className="text-blue-500">Forgotten password?</Link>
				<Link to="/reg" className="text-blue-500">Login</Link>
			</div>
		</div>
		</div>
		</div>
 
		</div>
		<div className="flex justify-center bg-white p-2 items-center text-sm text-slate-500 space-x-5">
		<Link to="/" className="hover:text-blue-500">Home</Link>
		<Link to="/" className="hover:text-blue-500">Privacy</Link>
		<Link to="/" className="hover:text-blue-500">Term & condition</Link>
		<Link to="/" className="hover:text-blue-500">About us</Link>
		<Link to="/" className="hover:text-blue-500">Help</Link>

		<p className="text-slate-300">copyright &copy; 2022</p></div>
			
		</div>
	)
}
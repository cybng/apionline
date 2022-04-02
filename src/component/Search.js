import React from 'react'

export default function Search() {
	return (
		<div className="bg-gradient-to-r from-indigo-500  via-blue-500 to-indigo-500">
		<div className="flex justify-center items-center h-96">
		<div className=" w-6/12 p-2 rounded-md drag-shadow-xl">
		<div className="text-4xl text-normal py-5 text-white">Search best Product</div>
		<div className="flex w-full bg-white justify-center px-2 py-3 rounded-md drop-shadow-xl">
			<input type="text" placeholder="Search" className="bg-slate-100 w-9/12 p-2 rounded-tl-lg rounded-bl-lg text-sm"/>
			<button className="bg-blue-500 text-white px-4 rounded-tr-lg rounded-br-lg text-sm">Search</button>
		</div>
		</div>
		</div>
		</div>
	)
}
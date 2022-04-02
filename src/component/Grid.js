import React from 'react'
import { Link } from "react-router-dom"	

export default function Grid() {
	return (
		<div className="w-full p-5">
			<div class="grid grid-cols-5 gap-4">
  <Link to="/productdetails"><div className="bg-slate-100 h-72 rounded-sm drag-shadow-lg"></div></Link>
  <Link to="/productdetails"><div className="bg-slate-100 h-72 rounded-sm drag-shadow-lg"></div></Link>
  <Link to="/productdetails"><div className="bg-slate-100 h-72 rounded-sm drag-shadow-lg"></div></Link>
  <Link to="/productdetails"><div className="bg-slate-100 h-72 rounded-sm drag-shadow-lg"></div></Link>
  <Link to="/productdetails"><div className="bg-slate-100 h-72 rounded-sm drag-shadow-lg"></div></Link>
  <Link to="/productdetails"><div className="bg-slate-100 h-72 rounded-sm drag-shadow-lg"></div></Link>
</div>
		</div>
	)
}
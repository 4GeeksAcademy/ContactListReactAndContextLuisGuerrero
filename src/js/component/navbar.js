import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light m-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Contact list</span>
			</Link>
			<div className="ml-auto">
				<Link to="/new-contact">
					<button className="btn btn-success m-3">Add new contact</button>
				</Link>
			</div>
		</nav>
	);
};

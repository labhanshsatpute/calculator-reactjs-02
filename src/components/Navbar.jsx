import React from 'react';

function Navbar() {

	return(
		<React.Fragment>
			<nav className="navbar navbar-expand-lg fixed-top py-3 bg-white shadow">
				<div className="container px-lg-0 px-md-3 px-sm-5">

					<a href="index.html" className="navbar-brand">Labhansh Calculator</a>

				</div>
			</nav>
		</React.Fragment>
	);
		
};

export default Navbar;
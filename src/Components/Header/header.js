import React from 'react';
import MovieSearch from '../Search/search';
import './header.css';
import { Link } from 'react-router-dom';

const Header = (props) => {
	return (
		<div className='row header d-flex align-items-center mb-4'>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<div className="container">
					<a className="navbar-brand" href="/">{props.header}</a>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarResponsive">
						<ul className="navbar-nav ms-auto">
							<li className="nav-item active">
								<a className="nav-link" href="/favourites">Favourites</a>
							</li>
						</ul>
						<MovieSearch searchValue={props.searchValue} setSearchValue={props.setSearchValue} />
					</div>
				</div>
			</nav>
		</div>

	);
};

export default Header;
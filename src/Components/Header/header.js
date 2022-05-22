import React from 'react';
import MovieSearch from '../Search/search';
import './header.css';
import { Link } from 'react-router-dom';

const Header = (props) => {
	return (
		<div className='row header d-flex align-items-center mb-4'>
			<nav class="navbar navbar-expand-lg navbar-light bg-light">
				<div class="container">
					<a class="navbar-brand" href="/">{props.header}</a>
					<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
						<span class="navbar-toggler-icon"></span>
					</button>
					<div class="collapse navbar-collapse" id="navbarResponsive">
						<ul class="navbar-nav ms-auto">
							<li class="nav-item active">
								<a class="nav-link" href="/favourites">Favourites</a>
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
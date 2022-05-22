import React from 'react';
import MovieSearch from '../Search/search';
import './header.css';
import { Link } from 'react-router-dom';

const Header = (props) => {
	return (
		<div className='row header d-flex align-items-center mb-4'>
			<div className='col'>
				<h1>{props.header}</h1>
			</div>
			<div className='col fav'>
				<Link to={`/favourites`}>
					<h3>Favourites</h3>
				</Link>
			</div>
			<MovieSearch searchValue={props.searchValue} setSearchValue={props.setSearchValue} />
		</div>

	);
};

export default Header;
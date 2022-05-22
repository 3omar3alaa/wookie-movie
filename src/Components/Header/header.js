import React from 'react';
import MovieSearch from '../Search/search';

const Header = (props) => {
	return (
		<div className='row header d-flex align-items-center mb-4'>
			<div className='col'>
				<h1>{props.header}</h1>
			</div>
			<MovieSearch searchValue={props.searchValue} setSearchValue={props.setSearchValue} />
		</div>

	);
};

export default Header;
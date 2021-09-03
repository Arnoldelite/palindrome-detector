import React, { useState } from 'react';

const useSearch = () => {
  	const [list, setList] = useState([]);
	const [search, setSearch] = useState('nyc');
	const [saved, setSaved] = useState([]);

 
  return {
	list,
	setList,
	search,
	setSearch,
	saved,
	setSaved,
  }
};

export default useSearch;
import React, { useEffect, useState } from 'react';
import { Divider } from 'antd';
import TweetForm from './TweetForm';
import Tweet from './Tweet';
import useSearch from '../hooks/useSearch';


function TweetList() {
	const {
		list,
		setList,
		search,
		setSearch,
		saved,
		setSaved,
	} = useSearch();

	const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
    let mounted = true;
	 
	const url = `http://localhost:3000/api/tweets?qs=${search}`;
	
	setIsLoading(true);
	fetch(url)
		.then((res) => res.json())
		  .then(items => {
			
			if (mounted) {
				console.log('items >>', items);
				const myStorage = window.localStorage;
				myStorage.setItem('saved', saved);

				console.log('mystorage >>', myStorage);
				setList(items.statuses);
				setIsLoading(false);
			}
		  }).catch((e) => {
			  console.log(e);
		  })
	
     return () => mounted = false;
   }, [search])


		function handleSearch(term) {
			setSearch(term);
		}

		function handleCancel() {
			setSearch('');
		}

		function handleSaveTweet(id) {
			// let check = saved.filter((item) => item.id === id);
			// if (check) return;
			const saveTweet = list.filter((item) => item.id === id);
			const savedTweets = saved.concat(saveTweet);
			setSaved(savedTweets);
		}
   

	return (
		<>
			<TweetForm onSubmit={handleSearch} onCancel={handleCancel}/>
			<div className="tweets-list-container">
			<h2 className="zone-title"> Search Results: </h2>
			<Tweet key="unsaved" data-testid="apartment-list" tweets={list} saveTweet={handleSaveTweet} isLoading={isLoading} />
			<Divider plain type="vertical" />
			<h2 className="zone-title"> Saved Search Results: </h2>
			<Tweet key="saved" data-testid="apartment-list-saved" tweets={saved} saved={saved} isLoading={isLoading} />
			</div>
		</>
	)

}

export default TweetList; 

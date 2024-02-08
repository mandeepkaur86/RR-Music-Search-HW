import React , {useEffect, useState,Suspense } from 'react'
import Gallery from './components/Gallery'
import SearchBar from './components/Searchbar'
import { DataContext } from './context/DataContext'
import { createResource as fetchData } from './helper'

function App() {
	const [searchTerm, setSearch] = useState('')
	const [message, setMessage] = useState('Search for Music!')
	const [data, setData] = useState(null)

	const API_URL = 'https://itunes.apple.com/search?term='

	useEffect(() => {
		if (searchTerm) {
			setData(fetchData(searchTerm))
		}
	}, [searchTerm])
	
}
	//useEffect(() => {
		//if(search) {

			//const fetchData = async () => {
			//	document.title = `${search} Music`
			//	const response = await fetch(API_URL + search)
			//	const resData = await response.json()
			//	if (resData.results.length > 0) {
			//		setData(resData.results)
			//	} else {
			//		setMessage('Not Found')
			//	}
		//	}
			//fetchData()
		
	//}, [searchTerm])
	
	const handleSearch = (e, term) => {
		e.preventDefault()
		setSearch(term)
	}
	const renderGallery = () => {
		if (data) {
			return (
				<Suspense fallback={<h1>Loading...</h1>}>
					<Gallery data={data} />
				</Suspense>
			);
		}
	return (
		<div className="App">
			<SearchBar handleSearch={handleSearch} />
			{message}
			{renderGallery()}
		</div>
	)
	
	}
	
	
	
export default App;

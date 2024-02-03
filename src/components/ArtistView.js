
import React, { useState, useEffect } from 'react'
import { useParams, link,useNavigate } from 'react-router-dom'
function ArtistView() {
    const { id } = useParams()
    const [artistData, setArtistData] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        const API_URL = `http://localhost:4000/album/${id}`
        const
            fetchData = async () => {
                const response = await fetch(API_URL)
                const resData = await response.json()
                setArtistData(resData.results)
            }
        fetchData()
    }, [id])


    const justAlbums = artistData.filter(entry => entry.collectionType === 'Album')
    const renderAlbums = justAlbums.map((album, i) => {
        return (
            <div key={i}>
                <link to={`/album/${album.collectionId}`}>
                    <p>{album.collectionName}</p>
                </link>
            </div>
        )
    })
    const navButton = () => {
        return(
            <div>
                <button onClick={() => navigate(-1)}>Back</button>
                <button onClick={() => navigate('/')}>home</button>
            </div>
        )
    }
    return (
        <div>
            {artistData.length> 0 
            ? <h2>{artistData[0].artistName}</h2>
            : <h2>loading...</h2>}
            {navButton()}
            {renderAlbums}
        </div>
    )

    }
export default ArtistView
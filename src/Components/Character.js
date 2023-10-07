import { useEffect, useState } from 'react';
import './Character.css'
import axios from 'axios'
import EpisodeInfo from './EpisodeInfo';

function Character() {
    const [search, setSearch] = useState('');
    const [characters, setCharacters] = useState([]);
    const getCharacterDetails = () => {
        axios.get('https://rickandmortyapi.com/api/character').then((response) => {
            console.log("character-details=>", response?.data?.results);
            setCharacters(response?.data?.results);
        }).catch((error) => {
            console.log(error);
        })
    }
    useEffect(() => {
        getCharacterDetails();
    }, []);
    return (
        <div>
            <div className="filter">
                <input type="text" placeholder='Search' onChange={(e) => setSearch(e.target.value)} />
            </div>
            <div className="characters">
                {characters.filter((item) => search.toLowerCase() === '' ? item : item?.name?.toLowerCase().includes(search)).map((character) => {
                    return (
                        <div className="card" key={character?.id}>
                            <img className="image" src={character?.image} alt="character-image" />
                            <div className="details">
                                <h2>{character?.name}</h2>
                                <div className="status">
                                    <span style={{ background: character?.status === 'Alive' ? 'green' : character?.status === 'Dead' ? 'red' : 'grey' }}></span>
                                    <p>{character?.status} - {character?.species}</p>
                                </div>
                                <div className="location">
                                    <p>Last known location:</p>
                                    <span>{character?.location?.name}</span>
                                </div>
                                <div className="first-seen">
                                    <p>First seen in:</p>
                                    <EpisodeInfo episode={character?.episode[0]} />

                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}
export default Character;

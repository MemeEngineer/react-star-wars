import {useEffect, useState} from 'react'
import StarshipCard from './StarshipCard.js';
import './sw-api.css'

function GetAllStarships(){
    const [starShips, setStarShips] = useState([])

    useEffect(() => {
        console.log('component is rendered')
        
        const fetchData = async () => {
        try{
            // return a response object
            const res = await fetch('https://swapi.dev/api/starships/');
            const data = await res.json() //parsing the raw data
            console.log(data.results)
            setStarShips(data.results)
            // console.log(starShips)
        }catch(error){
            console.log(error)
        }
    }
        fetchData();

    }, [setStarShips]);
    return(
        <div className='card-container'>
             {starShips.map((starShips) => 
             <div className="card">
                <StarshipCard name={starShips.name}  key={starShips.id}/>
                </div>)}
        </div>
    )
}

export default GetAllStarships;
import {useParams} from 'react-router-dom';
import { useContext, useEffect, useState} from 'react';

import "./styles.css";
import SportsOrderContext from '../../../context/sportsOrderContext';

export const SportsDetailsPage = (props) =>{
    const {id} = useParams();
    const [sport, setSport] = useState({});
    const globalState= useContext(SportsOrderContext);
    
    useEffect (() =>{
        const sport = globalState.sports.find(
            (sport) => sport.id.stringValue ===id);

            setSport(sport);
        }, [])

        if (sport){
            return (
                <div className="sports-page">
                    <h1 className='sports-title'> {sport.name?.stringValue}</h1>
                    <img src ={sport.image?.stringValue} alt="sport"/>
                    <img src ={sport.image2?.stringValue} alt="sport"/>
                    <img src ={sport.image3?.stringValue} alt="sport"/>
                </div>
            )
        } else{
            return <p> No sport with this id</p>
        }

}
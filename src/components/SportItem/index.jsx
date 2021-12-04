import './styles.css';
import {Link} from 'react-router-dom';
import SportsOrderContext from '../../context/sportsOrderContext';
import { useContext } from 'react';

export const SportItem = (props) =>{

    const {city, team, image, age, name, game, id, image2, image3} = props;

    const globalState = useContext(SportsOrderContext);

    const addSportToCart = () => {

        const sport = {
            id, 
            name,
            age,
            image,
            game,
            city,
            team,
            image2,
            image3
            
        }
        globalState.addSportToOrder(sport);
        console.log(globalState.order);
        alert("Sport was added");
    }
    return(
        <div className="sport">
            <img className ="sport-photo" src={image} alt={name + game + "photo"}/>

            <Link to={`/sport/${id}`}>
            <h1 className="sport-name">{name}</h1>
            </Link>
            <p className="sport-game">{game}</p>
            <p className="sport-age">{age} years old </p>
            <p className="sport-id">id: {id}</p>


        </div>
    )
}
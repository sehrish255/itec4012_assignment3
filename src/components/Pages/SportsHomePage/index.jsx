import "./styles.css";
import {useEffect, useState, useContext} from 'react';
import { SportItem } from "../../SportItem";
import SportsOrderContext from "../../../context/sportsOrderContext";
import {Search} from "../../Search";

export const SportsHomePage = () => {

  const [sports, setSports] = useState([]);
  const [filteredSports, setFilteredSports ] = useState([]);
  const [searchString, setSearchString] =useState('');
  const [loading, setLoading] = useState(true);
  const globalState = useContext(SportsOrderContext);

  useEffect(
    () => {
      getSports();

    }, []
  );

  useEffect (
    () => {
      handleSearchById();
    }, [searchString]
  )

  const handleSearchById = () => {
    //if search string was empty dont filter and show all pets
    if(searchString === ''){
      setFilteredSports(sports);
      return;
    }

    //filter
    const sportsFiltered = sports.filter(
      (sport) => {
        const id = sport.id.stringValue.toLowerCase();
        const isMatch = id.indexOf(searchString.trim().toLowerCase());
        return isMatch !== -1;
      }
    )

  setFilteredSports(sportsFiltered);
    }

  const getSports = async() => {
    try{
      const response = await fetch('https://firestore.googleapis.com/v1/projects/sports-itec/databases/(default)/documents/sports/');
      const data = await response.json();
      console.log(data);
      const formattedData = data.documents.map((item) => {
        return item.fields;
      });

      console.log (formattedData);

      setSports(formattedData);

      setFilteredSports(formattedData);

      globalState.initializeSports(formattedData);

      setLoading(false);

    }catch(err){
      console.log(err);
      setLoading(false);
    }
  }

  const handleSearchUpdate = (event) => {
    setSearchString(event.target.value);
  }

  return (
    <div className="sports-page">
      <h1 className="sports-title"> All Athletes </h1>
      <Search handleSearchUpdate= {handleSearchUpdate}/>
      <div className="sports-container">
      { 
          filteredSports.map((sport) => (
            <SportItem key={sport.id.stringValue} image={sport.image.stringValue} name={sport.name.stringValue} breed={sport.game.stringValue} age={sport.age.stringValue} id={sport.id.stringValue} city={sport.city.stringValue} team={sport.team.stringValue}></SportItem>
          )) 
        }

        {
          !loading && filteredSports.length === 0 && <p> Nothing found for {searchString}!</p>
        }
        {
          loading && <p>Loading data..</p>
        }
      </div>
      
    </div>
  );
};
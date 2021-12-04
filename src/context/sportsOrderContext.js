import React, {useState} from 'react';

const SportsOrderContext = React.createContext({
    sports:[],
    order: [],
    initializeSports:() => {},
    addSportToOrder: () => {},
    removeSportFromOrder: () => {},
});

export const SportsOrderContextProvider = (props) => {
    const [order, setOrder] = useState([]);
    const [sports, setSports] = useState([]);
    const initializeSports = (sportsFromApi) =>{
        setSports(sportsFromApi);
    }

    const addSportToOrder = (sport) => {
        let newOrder = order; 
        newOrder.push (sport);
        setOrder(order);
    }

    const removeSportFromOrder = (sportId) => {
        let prevOrder = order;
        const found = order.findIndex( (sport ) => {
            return (sport.id === sportId); 
        })
        if (found !== -1) {
            prevOrder.splice(found, 1); // delete one
            setOrder([...prevOrder]);
        } else {
            console.log ("error delete");
        }
    }
    
    return (<SportsOrderContext.Provider
     value={{order: order, addSportToOrder: addSportToOrder, removeSportFromOrder: removeSportFromOrder, sports:sports, initializeSports: initializeSports }}
    >
        {props.children}
    </SportsOrderContext.Provider>)

} 

export default SportsOrderContext;
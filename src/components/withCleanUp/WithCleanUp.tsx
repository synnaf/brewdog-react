import React, { useState, useEffect } from 'react'; 
import Beer from '../../models/Beer'; 
import BeerService from '../../services/BeerService'; 
import './WithCleanUp.css';

export default function WithCleanUp() {
    let defaultValue: Beer[] = []; //vårt interface utgör default value 
    const [beers, setBeers] = useState(defaultValue); //där vi lagrar datan i vårt state 

    useEffect(()=> {
        let service = new BeerService(); 
        let subscription = service.beers$.subscribe((fetchResult) => {
            setBeers(fetchResult);
            console.log(fetchResult); 
        });  
            service.getBeers(); 
            //eftersom vi gör en subscribe måste vi ha en cleanup-funktion som kopplar loss och frigör minnet 
            // den ska ligga innuti vår useEffect 
            return function cleanup() {
                subscription.unsubscribe(); 
            }; 
    }, []); //en tom array gör att det körs en gång 

    return(
        <>
        <h1>Numbers of beers: {beers.length} </h1>
        <ul>
            {beers.map((value, index) => {
                return (
                <li key={index}>
                    <h3>{value.name}</h3>
                    <div className="info-container">
                        <img src={value.image_url} alt="brewdog beer"/>
                        <span>{value.tagline}</span>
                    </div>
                </li>); 
            })}
        </ul>
        </>
    ); 
}
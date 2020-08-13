import React, { useEffect, useState } from 'react'; 

export function WithoutCleanUp() {
    const [counter, setcounter] = useState(0); 
    const [isLoading, setIsLoading] = useState(false); 

    //vi skapar en useEffect 
    //en anonym funktion skickas in, sedan vad som ska göras. vi lägger in villkoret för att förenkla 
    useEffect(()=> {
        console.log("hej effekt")
    }, [counter]); 

return(
    <>
        <div 
            onClick={() => {setcounter(counter +1) }}> {counter}
        </div>

        <div 
            onClick={() => {setIsLoading(!isLoading) }}> {isLoading.toString()}
        </div>
    </>
    ); 
}
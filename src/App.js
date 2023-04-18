import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";

function App() {
    const [tours, setTours] = useState([]);
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        fetchTours(url);
    }, []);

    
	function removeTour(tourID) {
		// add logic to update state for tour removal
        setTours(tours=>tours.filter(tour=>tour.id!==tourID));
	}

    async function fetchTours(api_url) {
        setLoading(true);
        //console.log(loading);
        // write code to fetch tours here
        let response = await fetch(api_url); 
        let data = await response.json(); 
        setTours(data);
        setLoading(false);
        //console.log(loading);
    }

    // function fetchTours(api_url) {
    //     setLoading(true);
    //     console.log(loading);
    //     // write code to fetch tours here
    //     fetch(url).then(data=>data.json()).then(data=>setTours(data));
    //     //setTours(tourss);
        
    //     setLoading(false);
    //     console.log(loading);
    // }

    if (loading) {
		return (
			<main>
				<Loading />
			</main>
		)
	}

    return (
		<main>
			{/* send tours here */}
			{/* <Tours tours={[...tours]} /> */}
            <Tours tours={tours} removeTour={removeTour} />
		</main>
	)
}

export default App;

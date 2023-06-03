
import React, { useState, useEffect } from 'react'
import './body8.css';
import InvestItem from './PrivateAssetTile';
import { database } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';


const Body8 =()=>{
    
  const collectionRef = collection(database, "properties");
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const querySnapshot = await getDocs(collectionRef);
        const fetchedProperties = [];
        querySnapshot.forEach((doc) => {
          fetchedProperties.push({ id: doc.id, ...doc.data() });
        });
        setProperties(fetchedProperties);
      } catch (error) {
        console.error("Error fetching properties:", error);
      }
    };

    fetchProperties();
  }, []);


    return(
        <div className="private-props">
            <div id="top-div">
                <div><h1>Top Assets</h1><p>These are the top fully owned individual properties</p></div>
                <button id='view-all-assets'>View All Top Assets</button>
            </div>
            <div className="assets-container">
                            {properties.map((property) => (
                              <InvestItem
                                key={property.id}
                                funded={property.funded}
                                generatereturns={property.generatereturns}
                                image={property.image}
                                investment={property.investment}
                                investors={property.investors}
                                location={property.location}
                                name={property.name}
                                returns={property.returns}
                                percentagefunded = {property.percentagefunded}
                              />
                            ))}
            </div>  
        </div>
    )
}

export default Body8;
import React, { useState,useEffect} from 'react';

function Offers() {
    const [offers,setOffers] =useState([]);

    useEffect(() => {
     fetch ("http://localhost:4000/posts")
                .then((res) => res.json())
                .then((data) => {
      const filteredOffers = data.filter(post => post.type === "offer");
                    setOffers(filteredOffers);
                })
      .catch((err) => console.error("Error fetching offers:", err));
        }, []);

    return (
        <div className='page'>
            <h2>Offers</h2>
             {offers.length=== 0 ? (
             <p>No offers available at the moment.</p>
            ) : (
             <ul>
             {offers.map((offer) => (
             <li key={offer.id}> 
             <h4>{offer.title}</h4>
                <p>{offer.description}</p>
              </li>
          ))}
             </ul>
            )}     
            <p>Here you can find various offers from community members.</p>
            <p>Use the navigation links above to explore different sections.</p>
        </div>
    );
}
export default Offers;
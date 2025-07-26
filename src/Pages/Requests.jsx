import React,{useState, useEffect} from 'react';

function Requests () {
    const [requests,setRequests]= useState([]);

    useEffect (()=>{
        fetch ("http://localhost:4000/posts")
        .then(res=>res.json())
        .then(data=>{
            const filtered=data.filter(post=>post.type==="request")
            setRequests(filtered)
        })
        .catch(err=>console.error("Error fetching requests",err));
    },[]);
    
    return (
        <div>
            <h2>Requests</h2>         
            {requests.length === 0 ? (
                <p>No requests available at the moment.</p>
                ):(
                <ul>
                    {requests.map((request)=>(
                        <li key={request.id}>
                        <h4>{request.title}</h4>
                        <p>{request.description}</p>
                        </li>
                    ))}
                        </ul>
                        )}
            <p>Here you can find various requests from community members.</p>
        </div>
    );
}
export default Requests;
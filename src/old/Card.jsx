import React from "react";
import { NavLink } from "react-router-dom";


const Card =(props)=>{
    return(
        <>
    <div className='col-12 col-md-6 col-lg-4 mx-auto mb-4'>
    <div className="card w-100" style={{maxWidth:'18rem', minWidth:'0'}}>
    <img src={props.imgsrc} className="card-img-top img-fluid" alt={props.imgsrc}/>
    <div className="card-body">
    <h5 className="card-title font-weight-bold mx">{props.title}</h5>
    <NavLink to={props.Link} className="btn btn-info">View</NavLink>
    </div>
    </div> 
    </div>
        </>
        );
};

export default Card;
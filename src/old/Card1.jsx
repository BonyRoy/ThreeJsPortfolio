import React from "react";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";


const Card =(props)=>{
    return(
        <>
    <div className='col-12 col-md-6 col-lg-4 mx-auto mb-4'>
    <div className="card w-100" style={{maxWidth:'18rem', minWidth:'0'}}>
    <img src={props.imgsrc} className="card-img-top img-fluid" alt={props.imgsrc}/>
    <div className="card-body">
    <h5 className="card-title font-weight-bold mx">{props.title}</h5>

    <div className="dropdown">
    <Button className="btn btn-info dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Modules
    </Button>
    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><NavLink className="dropdown-item" to={props.Link1} >Module 1</NavLink></li>
    <li><NavLink className="dropdown-item" to={props.Link2} >Module 2</NavLink></li>
    <li><NavLink className="dropdown-item" to={props.Link3} >Module 3</NavLink></li>
    <li><NavLink className="dropdown-item" to={props.Link4} >Module 4</NavLink></li>
    <li><NavLink className="dropdown-item" to={props.Link5} >Module 5</NavLink></li>
    <li><NavLink className="dropdown-item" to={props.Link6} >Module 6</NavLink></li>
    </ul>
    </div>

    </div>
    </div> 
    </div>
        </>
        );
};

export default Card;
import React from "react";
import Booksdata from "../old/Booksdata";
import Card from "../old/Card";

const List =()=>{
    return(
        <>
        <br/><br/><br/>
        <h2 className='head-text text-center'>
        My typed{" "}
        <span className='blue-gradient_text font-semibold drop-shadow'>
          Books
        </span>
        </h2>
        <div className="my-5">
        </div>
        <div className="container-fluid mb-5">
        <div className="row">
        <div className="col-10 mx-auto">
            <div className="row gy-4">
            {
                Booksdata.map((val, ind)=>{
                    return <Card key={ind}
                     imgsrc={val.imgsrc}
                     title={val.title}
                     Link={val.Link}
                    />
                })
            }
        </div>
        </div>
        </div>  
        </div>
        </>
        );
};

export default List;

import React from "react";
import HandWrittendata from "../old/HandWrittendata";
import Card1 from "./Card1";

const List =()=>{
    return(
        <>
        <br/><br/><br/>
        <h2 className='head-text text-center'>
        My HandWritten{" "}
        <span className='blue-gradient_text font-semibold drop-shadow'>
          Notes
        </span>
        </h2>
        <div className="my-5">
        <div className="container-fluid mb-5"
            //    style={ {
            //     backgroundColor: '#a7bfe0',
            // }}
        >
        <div className="my-5">
        </div>
        <div className="container-fluid mb-5">
        <div className="row">
        <div className="col-10 mx-auto">
            <div className="row gy-4">
            {
                HandWrittendata.map((val, ind)=>{
                    return <Card1 key={ind}
                     imgsrc={val.imgsrc}
                     title={val.title}
                     Link1={val.Link1}
                     Link2={val.Link2}
                     Link3={val.Link3}
                     Link4={val.Link4}
                     Link5={val.Link5}
                     Link6={val.Link6}

                    />
                })
            }
        </div>
        </div>
        </div>  
        </div>
        </div>
        </div>
        </>
        );
};

export default List;

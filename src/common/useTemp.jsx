import React, { useState } from 'react';

const UseTemp = () => {

    const [bool, setBool] = useState(false);

    // const clickHandler = () => {
    //     setBool(true);
    // }

    return (
        <>
            <div>
                {bool && <h1 className="text-light">Welcome Message</h1>}
                {/* {()=>setBool(true)} */}
                <button className="btn btn-success" onClick={()=>setBool(true)}>
                    Click
                </button>
            </div>
        </>
    );
}
export default UseTemp;
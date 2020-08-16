import React from 'react';

const Tile = (props) => {
    return(
        <div className="tile">
            <img src={props.icon} alt="tile icon"/>
            <div>
                <h1>1,420</h1>
                <h3>Average Things</h3>
            </div>
        </div>
    );
}

export default Tile;
import React from "react";

const PageHeader = (props) => {
    return(
        <div className="pageheader">
            <div>
                <h1>{props.main}</h1>
                <h2>{props.secondary}</h2>
            </div>
        </div>
    );
}

export default PageHeader;
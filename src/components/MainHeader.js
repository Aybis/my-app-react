import React from 'react'


const MainHeader = props => (
    <div className="row mb-2">
        <div className="col-lg-12">
            <div className="page-header">
                <h3 className="h3">{props.header}</h3>
                <p className="lead">{props.desc}</p>
            </div>
        </div>
    </div>
);

export default MainHeader;
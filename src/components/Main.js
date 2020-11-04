import React from 'react'
import MainHeader from './MainHeader';
import Modules from './Modules';

const Main = props => (
    <div className={`py-5 bg-${props.background}`}>
        <div className="container">
            <MainHeader 
                header={props.header}
                desc={props.desc}
            />
            <div className="row mb-4">
            {props.modules.length > 0  ? (
                    props.modules.map(({module}) => (
                        <Modules
                            key={module.id}
                            name={module.name}
                            deskripsi={module.deskripsi}
                            link={module.link}
                            />
                    ))
                ) : (
                    <p>Data Not Found</p>
                )}
            </div>
        </div>
    </div>
);

export default Main;
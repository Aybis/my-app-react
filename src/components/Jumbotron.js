import React from 'react'

const Jumbotron = props => (
    <section className="jumbotron text-center m-0" style={{ 
        backgroundImage: "url("+ props.background+")",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height:"400px"
     }}>
        <div className="container text-center">
            <h1 className="mt-5 p-5 text-light" style={{ background:'rgba(52, 52, 52, 0.3)'}}>{props.title} </h1>
            <p className="lead text-muted" hidden>
                Make Apps with Framework React use API from <a href="https://github.com/farizdotid/DAFTAR-API-LOKAL-INDONESIA">Farizdotid</a>
            </p>
           
        </div>
    </section>
);

export default Jumbotron;
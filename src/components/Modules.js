import React from 'react'
import logo from '../logo.svg';
import {Link} from 'react-router-dom';

const Modules = props => (
    <div className="col-3 col-sm">
    <div className="card mb-4 shadow-sm p-1 border-0 rounded">
      <img src={logo} alt="" height="150px"></img>
      <div className="card-body">
        <p className="card-title text-center">{props.name}</p>
        <p className="card-text">{props.deskripsi}</p>
        <div className="d-flex justify-content-between align-items-center">
          <div className="btn-group btn-block mb-2">
            <Link className="btn btn-sm btn-outline-primary btn-block" to="/food">View</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Modules;
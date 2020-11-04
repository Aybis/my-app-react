import React, { Component } from 'react'
import Jumbotron from '../components/Jumbotron';
import MainHeader from '../components/MainHeader';
import bg from '../images/food3.jpg'
import picture from '../images/picture.jpg'
import {API} from '../config/api';
import axios from 'axios';


const urlZomato = API.zomato.baseUrl;
const apiKey = API.zomato.apiKey;

class Food extends Component {

    constructor () {
        super();
        this.onKeypressHandle = this.onKeypressHandle.bind(this);
        this.state = {
            keyword : "",
            trendCity : [], 
            listCity : [],
        }
    }


    getTrendCity = () => {
        let url = `${urlZomato}/cities`;
        axios.get(url, {
            headers : {
                'user-key' : apiKey,
            },
            params: {
                city_ids : '74, 11052, 170, 86',
            }
        }).then(({data}) => {
            if(data.status === 'success'){
                this.setState({trendCity:data.location_suggestions})
            }
        }).catch(err => console.log(err));

    }

    onKeypressHandle = (event) => {
        
        let keyword = event.target.value;
        let url = `${urlZomato}/cities`;

        axios.get(url, {
            headers : {
                'user-key' : apiKey,
            },
            params : {
                'q' : keyword,
            }
        }).then(({data}) => {
            if(data.status === 'success'){
                this.setState({
                    listCity:data.location_suggestions,
                })
            }
        }).catch(err => console.log(err));
    }


    componentDidMount() {
        this.getTrendCity();

    }



    render () {
        return (
            <main role="main">
                <Jumbotron 
                    background={bg}
                    title="Dapur Emak"
                />
                <div className="py-5 bg-white">
                    <div className="container">

                        <div className="row mb-4">
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Search City" onKeyUp={this.onKeypressHandle} value={this.state.searchText} />
                                <div className="input-group-append">
                                  <button className="btn btn-primary">Search</button>
                                </div>
                            </div>
                        </div>
                        <MainHeader
                            header="List City"
                            desc="Magna sit velit eu excepteur adipisicing."
                        />
                        <div className="row">
                            {this.state.listCity.length > 0 ? (
                               this.state.listCity.map(index => (
                                <div className="col-lg-3 col-sm mb-2" key={index.id} >
                                <div className="card border-0 rounded shadow-sm" >
                                    <img src={bg} class="card-img-top" alt="..." />
                                    <div className="card-body" >
                                        <h5 className="card-title">{index.name}</h5>
                                        <p>{index.country_name}</p>
                                        <small><a href="/" style={{ textDecoration:"none" }}>See Restaurant in {index.name}</a></small>
                                    </div>
                                    </div>
                                </div>
                                ))
                            ) : (
                                this.state.trendCity.map(index => (
                                    <div className="col-lg-3 col-sm" key={index.id}>
                                    <div className="card border-0 rounded shadow-sm">
                                        <img src={bg} class="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{index.name}</h5>
                                            <p >{index.country_name}</p>
                                            <a href="/" style={{ textDecoration:"none" }}>See Restaurant in {index.name}</a>
                                        </div>
                                        </div>
                                    </div>
                                ))
                            )}

                        </div>
                        <hr />

                        

                       

                    </div>
                   
                </div>
                
            </main>
        );
    }
}

export default Food;
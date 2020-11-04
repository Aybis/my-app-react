
import React, { Component } from 'react'
import bg from '../images/bg9.jpg'
import Jumbotron from '../components/Jumbotron';
import Main from '../components/Main';


const modules = [
    {
        "module" : {
            "id" : 1,
            "name" : "Test1",
            "deskripsi" : "Ullamco consequat occaecat pariatur tempor non quis. Ullamco laboris duis est adipisicing et nulla id minim. ",
            "link" : "/food",
        }
    },
    {
        "module" : {
            "id" : 2,
            "name" : "Test1",
            "deskripsi" : "Ullamco consequat occaecat pariatur tempor non quis. Ullamco laboris duis est adipisicing et nulla id minim.",
            "link" : "/food",

        }
    },
    {
        "module" : {
            "id" : 3,
            "name" : "Test1",
            "deskripsi" : "Ullamco consequat occaecat pariatur tempor non quis. Ullamco laboris duis est adipisicing et nulla id minim.",
            "link" : "/food",

        }
    },
    {
        "module" : {
            "id" : 4,
            "name" : "Test1",
            "deskripsi" : "Ullamco consequat occaecat pariatur tempor non quis. Ullamco laboris duis est adipisicing et nulla id minim.",
            "link" : "/food",

        }
    },
]


class Home extends Component {
    render () {
        return (
            <main role="main">
               <Jumbotron 
                background={bg}
                title="My Collection Apps"
               />

                <Main 
                    background="light"
                    header="List Apps with React"
                    desc="Eu duis ullamco minim eiusmod. Qui irure incididunt minim ea sint Lorem excepteur."
                    modules={modules}
                />

                <Main 
                    background="white"
                    header="List Apps with Laravel"
                    desc="Eu duis ullamco minim eiusmod. Qui irure incididunt minim ea sint Lorem excepteur."
                    modules=""

                />
            </main>
        );
    }
}


export default Home;
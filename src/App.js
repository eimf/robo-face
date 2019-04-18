import React, {Component} from 'react'
import CartList from './CartList'
import SearchBox from './SearchBox'
import Scroll from './Scroll'
// import {cats} from './cats'
import _ from 'lodash'

class App extends Component {
    constructor() {
        super()
        this.cats = [];
        this.state = {
            kittens : []
            // searchfield : ''
        }
    }
    onSearchChange = (event) => {
        // this.setState({searchfield: event.currentTarget.value.toLowerCase()})
        // this.state.kittens = cats.filter(kat => kat.name.contains(event.currentTarget.value))
        // =======>>>> the one that works
        // this.setState({kittens: cats.filter(kat => kat.name.toLowerCase().includes(event.currentTarget.value.toLowerCase()))})
        // =======>>>>>
        // ****************************************
        this.setState({kittens: _.filter(this.cats, function(kat) {
                return _.includes(kat.name.toLowerCase(), event.currentTarget.value.toLowerCase());
            })
        });
        // ****************************************
        // console.log(cats.filter(kat => kat.name.toLowerCase().includes(event.currentTarget.value.toLowerCase())));
        // this.state.kittens.filter(kat => kat.name.toLowerCase().includes(this.state.searchfield.toLowerCase()))
    }
    render() {
        // const filteredKittens = this.state.kittens.filter(kat => kat.name.toLowerCase().includes(this.state.searchfield));
        return (
            <div className='tc'>
            <h1>Kittens</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            <Scroll>
                <CartList kats={this.state.kittens}/>
            </Scroll>
            </div>
        );
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> {
            return response.json();
        })
        .then(users => {
            this.cats = users;
            this.setState({kittens: users});
        })
        // this.setState({kittens: cats});
        // var xhttp = new XMLHttpRequest();
        // xhttp.onreadystatechange = function(data) {
        //     if (this.readyState == 4 && this.status == 200) {
        //         console.log(data);
        //     }
        // };
        // xhttp.open("GET", "https://jsonplaceholder.typicode.com/users", true);
        // xhttp.send();
    }
}

export default App
import React, {Component} from 'react';
import {connect} from 'react-redux';
import CartList from './bits/CartList';
import SearchBox from './bits/SearchBox';
import Scroll from './bits/Scroll';
import {cats} from './data/cats';
import _ from 'lodash';
import {setSearchField} from '../actions';

const mapStateToProps = (state) => {
    return {searchField: state.searchField};
}
const mapDispatchToProps = (dispatch) => {
    return {onSearchChange: (event) => dispatch(setSearchField(event.currentTarget.value))};
}

class App extends Component {
    constructor() {
        super()
        this.state = {
            kittens : cats
        }
    }
    render() {
        const {kittens} = this.state;
        const {searchField, onSearchChange} = this.props;
        const wantedKittens = _.filter(kittens, function(kat) {
          return _.includes(kat.name.toLowerCase(), searchField.toLowerCase());
        })
        return (
            <div className='tc'>
            <h1>Kittens</h1>
            <SearchBox searchChange={onSearchChange}/>
            <Scroll>
                <CartList kats={wantedKittens}/>
            </Scroll>
            </div>
        );
    }
    componentDidMount() {
        // fetch('https://jsonplaceholder.typicode.com/users')
        // .then(response=> {
        //     return response.json();
        // })
        // .then(users => {
        //     this.setState({kittens: users});
        // })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
import React, {Component} from 'react';
import {connect} from 'react-redux';
import CartList from './bits/CartList';
import SearchBox from './bits/SearchBox';
import Scroll from './bits/Scroll';
// import {cats} from './data/cats';
import _ from 'lodash';
import {setSearchField, requestKittens} from '../actions';

const mapStateToProps = (state) => {
    return {
        searchField: state.searchKittens.searchField,
        kittens : state.requestKittens.kittens,
        isPending: state.requestKittens.isPending,
        error: state.requestKittens.error
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.currentTarget.value)),
        onRequestKittens: () => dispatch(requestKittens())
    }
}

class App extends Component {
    render() {
        const {searchField, onSearchChange, kittens} = this.props;
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
        this.props.onRequestKittens();
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
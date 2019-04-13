import React from 'react'

const Card = ({id, name, email}) => {
    return (
        <div className='tc bg-light-red dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img src={`https://robohash.org/meow${id}?set=set4&size=150x150`} alt=""/>
            <div>
                <h2> {name} </h2>
                <h3> {email}  </h3>
            </div>
        </div>
    );
}

export default Card;
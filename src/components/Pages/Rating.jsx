import React from 'react';

const Rating = ({rate}) => {

    if(rate === '5'){
        return (
            <span className="rating-stars">
                <i className="ti-star full"></i>
                <i className="ti-star full"></i>
                <i className="ti-star full"></i>
                <i className="ti-star full"></i>
                <i className="ti-star full"></i>          
            </span>
        )
    }
    else if(rate === '4'){
        return (
            <span className="rating-stars">
                <i className="ti-star full"></i>
                <i className="ti-star full"></i>
                <i className="ti-star full"></i>
                <i className="ti-star full"></i>        
                <i className="ti-star"></i>        
            </span>
        )

    }
    else if(rate === '3'){
        return (
            <span className="rating-stars">
                <i className="ti-star full"></i>
                <i className="ti-star full"></i>
                <i className="ti-star full"></i>
                <i className="ti-star"></i>       
                <i className="ti-star"></i>       
            </span>
        )

    }
    else if(rate === '2'){
        return (
            <span className="rating-stars">
                <i className="ti-star full"></i>
                <i className="ti-star full"></i>
                <i className="ti-star"></i>
                <i className="ti-star"></i>       
                <i className="ti-star"></i>       
            </span>
        )

    }
    else if(rate === '1'){
        return (
            <span className="rating-stars">
                <i className="ti-star full"></i>
                <i className="ti-star"></i>
                <i className="ti-star"></i>
                <i className="ti-"></i>       
                <i className="ti-"></i>       
            </span>
        )

    }
    else if(rate === ''){
        return (
            <span className="rating-stars">
                <i className="ti-star"></i>
                <i className="ti-star"></i>
                <i className="ti-star"></i>
                <i className="ti-star"></i>       
                <i className="ti-star"></i>       
            </span>
        )

    }

  
};

export default Rating;
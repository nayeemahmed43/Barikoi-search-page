import React from 'react';
import {connect} from 'react-redux';

const ApiDataList = (props) => {
    
    return (
        <div>
            
        </div>
    );
};

function mapStateToProps( {data} ){
    return {data}; 
}

export default connect(mapStateToProps)(ApiDataList);
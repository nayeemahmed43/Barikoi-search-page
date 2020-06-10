import React, { useState } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import { fetchData } from '../../actions/index';
import ApiDataList from './ApiDataList';

const SearchPage = () => {
    const [apiData,setApiData] = useState([]);
    

    const onInputChange = (term) => {
        //setTerm(_.debounce((search) => {fetchData(search)},2000));
        console.log(fetchData(term));
        //setApiData(fetchData(term));
        //console.log(fetchData(term).payload.object.data.places[0])
        //const data = _.debounce((term) => {this.props.fetchData(term)},2000);
        
        //setTerm('');
        
    }
    return (
        <div>
            <input onChange={e => onInputChange(e.target.value)} placeholder="Search Location"/>
            <ApiDataList apiData={apiData}></ApiDataList>
        </div>
    );
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchData }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchPage);
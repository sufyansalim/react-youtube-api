import React from'react';

class Search extends React.Component{

    state={
        term:'',
    }

    onInputChange =(event) =>{
        this.setState({term: event.target.value});
    }

    onFormSubmit = e =>{
        e.preventDefault();
        this.props.onFormSubmit(this.state.term);
    }

    render(){
        return ( 
            <div className="search-bar ui segment" style={{backgroundColor:'#eee'}}>
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <input type="text" 
                        placeholder='SEARCH VIDEO'
                        value={this.state.term}
                        onChange={this.onInputChange}/>
                    </div>
                </form>
            </div>
        );
    }
}

export default Search;
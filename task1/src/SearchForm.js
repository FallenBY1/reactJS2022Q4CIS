import React from "react";

/*
SearchForm Using React.PureComponent
 */
export class SearchForm extends React.PureComponent {
    constructor() {
        super();
        this.state = {
            keyword: '',
            showResults: false
        }
    }

    search = (e) => {
        const value = e.target.value;
        if (value === '') {
            this.setState({ showResults: false });
        }
        this.setState({ keyword: e.target.value });
    }

    submit = () => {
        this.setState({ showResults: true });
    }

    render() {
        return <form className='search-form'>
            <input type="text" className='search-field' id="search-field" onChange={this.search} value={this.state.keyword} />
            <button type="button" onClick={this.submit} className='search-button'>Search</button>
            <div hidden={!this.state.showResults}>Search results for keyword: {this.state.keyword}</div>
        </form>
    }

}
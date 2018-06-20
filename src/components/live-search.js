import React from 'react';
 
import SearchForm from './search-form';
import CharacterCount from './character-count';
import CharacterList from './character-list';
 
export default class LiveSearch extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            search: "",
            characters: props.characters,
            filtered: props.characters,
            onChange: this.onSearchChange
        };
    }
	
    onSearchChange(e) {
        const tempSearch = e;
        if(e !== "") {
    		const filtered = this.state.characters.filter(character => {
                if(character.name.includes(tempSearch)) {
                    return true;
                } else {
                    return false;
                }
            });
            this.setState({ filtered });
        } else {
            const filtered = this.state.characters;
            this.setState({ filtered });
        }
	};

    render() {
        return (
            <div className="live-search">
                <SearchForm onChange={e => this.onSearchChange(e.target.value)} />
                <CharacterCount count={this.state.filtered.length} />
                <CharacterList characters={this.state.filtered} />
            </div>
        );
    }
}

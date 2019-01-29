import React from 'react';
import Hero from './heroes.js';

export default class HeroDetail extends React.Component {

    constructor() {
        super();

        this.handleChange = this.handleChange.bind(this);
            //this.save = this.save.bind(this);
    }

    save = () => {
        this.props.onSave();
    }

    back = () => {
         window.location.href = "/";
    }

    handleChange(event) {
        const newName = event.target.value;
        const newHero = {
            id: this.props.heroId,
            name: newName
        };

        this.props.onChange(newHero);
    }

    render() {
        return (
            <div>
                <h2>{this.props.heroName} details!</h2>

                <div>
                    <label>id: </label>{this.props.heroId}
                </div>

                <div>
                    <label>name: </label>
                    <input value={this.props.heroName} onChange={this.handleChange} />
                </div>
                <button onClick={this.back}>Back</button>
                <button onClick={this.save}>Save</button>

            </div>

        );
    }
}
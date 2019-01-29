import React from 'react';
import './heroes.css';
import HeroDetail from './hero_detail.js';


export default class Hero extends React.Component {
    constructor() {
        super();
        this.state = {

            selectedHero: {
                id: null,
                name: ""
            },
            classDetail: "hidden",
            heroes: [
                { id: 11, name: 'Mr. Nice' },
                { id: 12, name: 'Narco' },
                { id: 13, name: 'Bombasto' },
                { id: 14, name: 'Celeritas' },
                { id: 15, name: 'Magneta' },
                { id: 16, name: 'RubberMan' },
                { id: 17, name: 'Dynama' },
                { id: 18, name: 'Dr IQ' },
                { id: 19, name: 'Magma' },
                { id: 20, name: 'Tornado' }
            ],
            value: "",

        };

        this.onSelect = this.onSelect.bind(this);
        this.onDeleteHero = this.onDeleteHero.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.onHeroChanges = this.onHeroChanges.bind(this);
        this.onSave = this.onSave.bind(this);
    }

    getNextId() {
        const heroes = this.state.heroes;
        //this.props.parent.setState({});
        const lastId = heroes[heroes.length - 1].id;
        return lastId + 1;
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    onSelect(hero) {
        this.setState({ selectedHero: hero, classDetail: "block", });
    }

    addHero() {
        const newHero = {
            id: this.getNextId(),
            name: this.state.value,
        };

        const heroes = this.state.heroes;

        heroes.push(newHero);
        
        //use heroes in other file
        localStorage.setItem("heroes" , JSON.stringify(heroes));
        this.setState({ heroes: heroes, value: "" });
    }

    onSave() {
        const selectedHero = this.state.selectedHero;
        const heroes = this.state.heroes;
        //hero is in heroes array
        const newHeroIndex = heroes.findIndex((hero) => {
            if (selectedHero.id === hero.id) {
                return true;
            } else {
                return false;
            }
        });

        heroes[newHeroIndex].name = this.state.selectedHero.name;

        localStorage.setItem("heroes" , JSON.stringify(heroes));
        this.setState({ heroes: heroes });

    }

    onHeroChanges(newHero) {
        this.setState({ selectedHero: newHero });
    }

    onDeleteHero(hero) {

        const deleteHero = hero;

        const heroes = this.state.heroes;
        const deletedIndex = heroes.indexOf(deleteHero);
        heroes.splice(deletedIndex, 1);

        localStorage.setItem("heroes" , JSON.stringify(heroes));
        this.setState({ heroes: heroes });
    }

    gotoDetail(){
         window.location.href = "/heroDetail";
    }

    render() {

        var value = this.state.value;

        return (
            <div>
                <h2>My Heroes</h2>

                <div>
                    <label>Hero name:</label>
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                    <button onClick={this.addHero.bind(this)}>Add</button>
                </div>

                <ul className="heroes">
                    {this.state.heroes.map(
                        (hero) => {
                            return (
                                <li key={hero.id} onClick={() => this.onSelect(hero)}>
                                    <span className="badge">{hero.id}</span>
                                    <span>{hero.name}</span>

                                    <button className="delete" onClick={() => { this.onDeleteHero(hero) }}>x</button>
                                </li>)
                        }
                    )}
                </ul>

                <div className={this.state.classDetail}>
                    <h2>{this.state.selectedHero.name.toUpperCase()} is my hero</h2>

                    <button onClick={ () => this.gotoDetail() }>View Details</button>


                    <HeroDetail heroName={this.state.selectedHero.name} heroId={this.state.selectedHero.id} onChange={this.onHeroChanges} onSave={this.onSave} />
                </div>

                <h1>{value}</h1>
            </div>

        )
    }

}
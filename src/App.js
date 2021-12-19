import React, {Component} from 'react'
import './App.css'
import {CardList} from './component/card-list/card-list.component.jsx'
import {Search} from './component/search/search.component'

class App extends Component {
  constructor() {
    super()
    this.state = {
      monsters: [],
      searchFiled: '',
    }
  }

  // featching the data from json placeholder
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((user) => this.setState({monsters: user}))
  }
  clickchange = (e) => {
    this.setState({searchFiled: e.target.value})
  }

  render() {
    // filtering the searchbox and calling in cardlist
    const {monsters, searchFiled} = this.state
    const filtered = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchFiled.toLowerCase())
    )
    // writing reusable code for search
    return (
      <div className='App'>
        <h1>Monster Roledex</h1>
        <Search placeholder='Search name' clickchange={this.clickchange} />
        <CardList monsterss={filtered} />
      </div>
    )
  }
}

export default App

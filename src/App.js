import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
// import PropTypes from 'prop-types'
import {
  BrowserRouter as Router,
  Routes,
  Route,
   
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export class App extends Component {
 
  pageSize=15;
  apiKey='6f9d94b78fae47f1b03aa0cc3b45d934';
  state={
    progress:10
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  constructor(){
    super();
    console.log(this.apiKey)
  }
  render() {

    return (
      <>
        <Router>
        <Navbar /><LoadingBar
        color='#f11946'
        height={4}
        progress={this.state.progress}
        />
        
          <Routes>
            <Route  exact path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={this.pageSize} country="in" category="general" />}/>
            <Route  exact path="/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="business" pageSize={this.pageSize} country="in" category="business"/>}/>
            <Route  exact path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize={this.pageSize} country="in" category="entertainment" />}/>
            <Route  exact path="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="health" pageSize={this.pageSize} country="in" category="health" />}/>
            <Route  exact path="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="science" pageSize={this.pageSize} country="in" category="science"/>}/>
            <Route  exact path="/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" pageSize={this.pageSize} country="in" category="sports"/>}/>
            <Route  exact path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" pageSize={this.pageSize} country="in" category="technology"/>}/>
          </Routes>
        </Router>
        
      </>
    )
  }
}

export default App

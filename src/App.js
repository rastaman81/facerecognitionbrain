import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
// import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import './App.css';

const particlesOptions =   {
    particles: {
      number: {
        value: 75,
        density: {
          enable: true,
          value_area: 800
        }
      }
    }
}


class App extends Component {
  constructor() {
    super();
    this.state ={
      input: '',
      imageUrl: '',
      box: {},
      route: 'signin',
      isSignedIn: false,
      user: {
        id: '',
        name: '',
        email: '',
        entries: 0,
        joined: ''
      }
    }
  }

loaduser = (data) => {
  this.setState({
    user: {
      id: data.id,
      name: data.name,
      email: data.email,
      entries: data.entries,
      joined: data.joined
    }})
}
  onRouteChange = (route) => {
    if(route === 'signout') {
      this.setState({ isSignedIn: false});
    } else if (route === 'home'){
      this.setState({ isSignedIn: true});
    }
    this.setState({route: route});
  }
  render() {
    const {isSignedIn, route} = this.state;
    return (
      <div className="App">
      <Particles className = 'particles' params={particlesOptions} />
        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
        {route === 'home' 
        ?
          <div>
            <Rank />
            <ImageLinkForm />
          </div>
          
        : (
            route === 'signin'
            ? <Signin onRouteChange={this.onRouteChange} />
            : <Register loadUser={this.loaduser} onRouteChange={this.onRouteChange} />
          )
          
        }
        { //<Logo />
        }
        
        {/*<FaceRecognition /> */ }
      </div>
    );
  }
}

export default App;

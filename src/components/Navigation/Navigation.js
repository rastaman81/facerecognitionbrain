import React from 'react';
import Tilt from 'react-tilt';
import brain from '../Logo/mlhuillier.jpg';
import '../Logo/Logo.css';

const Navigation = ({ onRouteChange, isSignedIn }) => {
	
		if(isSignedIn){
			return(
				<nav style={{display: 'flex'}}>
					<div className='pa2 ma4 mt0'>
						<Tilt className="Tilt br2 shadow-2" options={{ max : 50 }} style={{ height: 110, width: 350 }} >
	 						<div className="Tilt-inner pa3">
	 							<img style={{paddingTo: '5px'}} alt='logo' src={brain} />
	 						</div>
						</Tilt>
					</div>
					<p onClick={ () =>onRouteChange('signout')} className='f4 link dim black underline pa3 pointer' >Sign Out</p>
				</nav>	
			);
		} else {
			return(
				<nav style={{display: 'flex'}}>
					<div className='pa2 ma4 mt0'>
						<Tilt className="Tilt br2 shadow-2" options={{ max : 50 }} style={{ height: 110, width: 350 }} >
	 						<div className="Tilt-inner pa3">
	 							<img style={{paddingTo: '5px'}} alt='logo' src={brain} />
	 						</div>
						</Tilt>
					</div>
					<p onClick={ () =>onRouteChange('signin')} className='f4 link dim black underline pa3 pointer' >Sign In</p>
					<p onClick={ () =>onRouteChange('register')} className='f4 link dim black underline pa3 pointer' >Register</p>
				</nav>	
			);
		}
		
	
}

export default Navigation;
import React from 'react';
import './ImageLinkForm.css';


const ImageLinkForm = () => {
	return(
		<div>
			<p className='f3'>
				{'Search'}
			</p>
			<div className='center'>
				<div className='form center pa4 br3 shadow-5'>
					<input className='f4 pa2 w-70 center' type='text' htmlFor='employee name' />
					<button className='w-30 grow f4 link ph3 pv2 dib white bg-light-green'>Click</button>
				</div>
			</div>
		</div>
	);
}

export default ImageLinkForm;
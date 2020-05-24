import React from 'react';
import Homepage from './sharedComponents/menu/homepageMenu';
import Banner from './sharedComponents/banner/banner';
import ApiComponent from './app/endpoint/components/ApiComponent'
import FooterComponent from './sharedComponents/footer/footerComponent'

function App() {
	return (
		<div>
			<Homepage />
			<Banner />
			<ApiComponent />
			<FooterComponent />
		</div>
	);
}

export default App;

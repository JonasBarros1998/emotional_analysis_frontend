import React from 'react';
import Homepage from './components/menu/homepageMenu';
import Banner from './components/banner/banner';
import ApiComponent from './app/endpoint/components/ApiComponent'
import FooterComponent from './components/footer/footerComponent'

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

import React from "react";
import ProductsMenu from "./../generals/ProductsMenu";

class Home extends React.Component {
	componentDidMount(prevProps) {
		AOS.init();
	}
  	render() {
    	return (
			<div className="container pt-1">
				<ProductsMenu  />
				<div data-aos="fade-up">
				</div>
			</div>
    	);
  	}
}

export default Home;
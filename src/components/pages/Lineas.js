import React from "react";
import ProductsMenu from "./../generals/ProductsMenu";

class Home extends React.Component {
	componentDidMount(prevProps) {
		AOS.init();
	}
  	render() {
    	return (
			<div className="container">
				<ProductsMenu />
				<div data-aos="fade-up">
					dfsfdsffsfs
				</div>
			</div>
    	);
  	}
}

export default Home;
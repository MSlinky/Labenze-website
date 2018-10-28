import React from "react";
import SliderMain from "../generals/index/sliderMain";
import CategoriesSlider from "../generals/index/categories-slider";

class Home extends React.Component {
	componentDidMount(prevProps) {
		AOS.init({
			once: true
		});
	}
  	render() {
    	return (
			<div>
				<SliderMain />
				<CategoriesSlider />
			</div>
    	);
  	}
}

export default Home;
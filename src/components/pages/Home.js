import React from "react";
import SliderMain from "./../generals/sliderMain";
import CategoriesSlider from "./../generals/categories-slider";

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
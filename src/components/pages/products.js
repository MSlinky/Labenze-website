import React from "react";

class Home extends React.Component {
	componentDidMount(prevProps) {
		AOS.init();
	}
  	render() {
    	return (
			<div data-aos="fade-up">
				sdfdssdfdssddfsdfsdffsddsfsdfsdf
			</div>
    	);
  	}
}

export default Home;
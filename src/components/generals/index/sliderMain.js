import React from "react";

class Slider extends React.Component {

	componentDidMount(prevProps) {
		/*this.$el = $(this.el);

		this.$el.owlCarousel({
            navigation: true,
            slideSpeed: 300,
            paginationSpeed: 400,
            items: 1,
            autoplay: 3000,
            stopOnHover: true,
            loop: true,
            dots: false,
        });*/
	}
	componentDidUpdate(prevProps) {
		console.log('Actualizar');
	}
  	render() {
    	return (
    		<div>
	    		<section id="sidebar" data-aos="fade-up">
			        <div id="owl" className="owl-carousel height" ref={el => this.el = el}> 
			            <div className="item" id="item-1">
			            	<div style={{'backgroundImage': 'url(/public/img/main/COMMUNITY.jpg)'}}></div>
			            </div>
			            <div className="item" id="item-2">
			            	<div style={{'backgroundImage': 'url(/public/img/main/EXTERIOR.jpg)'}}></div>
			            </div>
			            <div className="item" id="item-3">
			            	<div style={{'backgroundImage': 'url(/public/img/main/RUBIKDISPLAY.jpg)'}}></div>
			            </div>
			            <div className="item" id="item-3">
			            	<div style={{'backgroundImage': 'url(/public/img/main/AZULAMARILLOCAFE.jpg)'}}></div>
			            </div>
			       </div>
			    </section>
		    </div>
    	);
  	}
}

export default Slider;
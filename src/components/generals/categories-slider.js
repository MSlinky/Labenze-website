import React from "react";

class Slider extends React.Component {

	componentDidMount(prevProps) {
		this.$el = $('.owl-carousel');

		this.$el.owlCarousel({
            navigation: true,
            slideSpeed: 300,
            paginationSpeed: 400,
            items: 1,
            autoplay: 3000,
            stopOnHover: true,
            loop: true,
        });
	}
	componentDidUpdate(prevProps) {
		
	}
  	render() {
  		var randomShowItem = function (max, min){
			return Math.round(Math.random() * (max - min) + min)+'00';
		}
    	return (
    		<div className="container">
	    		<div className="contentSlidersCategories">
					<div data-aos="fade-up" data-aos-delay={randomShowItem(1, 3)} >
						<div className="owl-carousel owl-theme"> 
							<div className="item">
								<img src="/public/img/main/slider/DESIGN1.png" />
							</div>
							<div className="item">
								<img src="/public/img/main/slider/DESIGN2.png" />
							</div>
							<div className="item">
								<img src="/public/img/main/slider/DESIGN3.png" />
							</div>
							<div className="item">
								<img src="/public/img/main/slider/DESIGN4.png" />
							</div>
						</div>
						<div className="title">
							Design
						</div>
						<div className="info">
							El diseño y estilo de vida conforman la esencia de las creaciones de los más destacados diseñadores europeos, brindando una amplia gama de colores, materiales, procesos y acabados para generar propuestas innovadoras.
						</div>
					</div>
					<div data-aos="fade-up" data-aos-delay={randomShowItem(1, 3)}>
						<div className="owl-carousel owl-theme">
							<div className="item">
								<img src="/public/img/main/slider/in.png" />
							</div>
							<div className="item">
								<img src="/public/img/main/slider/in2.png" />
							</div>
							<div className="item">
								<img src="/public/img/main/slider/in3.png" />
							</div>
							<div className="item">
								<img src="/public/img/main/slider/in4.png" />
							</div> 
						</div>
						<div className="title">
							In & Out
						</div>
						<div className="info">
							Diseños armónicos, atemporales y elegantes que transmiten frescura a espacios de exterior, ofreciendo ese acento de sofisticación, y al mismo tiempo un nivel alto de resistencia que se requiere para protegerlos de agentes externos que pudieran dañarlos.
						</div>
					</div>
					<div data-aos="fade-up" data-aos-delay={randomShowItem(1, 3)}>
						<div className="owl-carousel owl-theme"> 
							<div className="item">
								<img src="/public/img/main/slider/DESIGN1.png" />
							</div>
							<div className="item">
								<img src="/public/img/main/slider/DESIGN2.png" />
							</div>
							<div className="item">
								<img src="/public/img/main/slider/DESIGN3.png" />
							</div>
							<div className="item">
								<img src="/public/img/main/slider/DESIGN4.png" />
							</div>
						</div>
					</div>
					<div data-aos="fade-up" data-aos-delay={randomShowItem(1, 3)}>
						<div className="owl-carousel owl-theme">
							<div className="item">
								<img src="./public/img/main/slider/CONFORT1.png" />
							</div>
							<div className="item">
								<img src="./public/img/main/slider/CONFORT2.png" />
							</div>
							<div className="item">
								<img src="./public/img/main/slider/CONFORT3.png" />
							</div>
							<div className="item">
								<img src="./public/img/main/slider/CONFORT4.png" />
							</div> 
						</div>
					</div>
					<div data-aos="fade-up" data-aos-delay={randomShowItem(1, 3)}>
						<div className="owl-carousel owl-theme">
							<div className="item">
								<img src="/public/img/main/slider/in.png" />
							</div>
							<div className="item">
								<img src="/public/img/main/slider/in2.png" />
							</div>
							<div className="item">
								<img src="/public/img/main/slider/in3.png" />
							</div>
							<div className="item">
								<img src="/public/img/main/slider/in4.png" />
							</div> 
						</div>
					</div>	
			    </div>
			</div>
    	);
  	}
}

export default Slider;
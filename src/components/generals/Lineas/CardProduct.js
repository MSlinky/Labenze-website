import React from "react";
import Grid from '@material-ui/core/Grid';

class CardProduct extends React.Component {
	constructor(props) {
		super(props);
	}
	
  	render() {
			var randomShowItem = function (max, min){
				return Math.round(Math.random() * (max - min) + min)+'00';
			}
			
			if (this.props.productsActivated === 0 || this.props.info.activated === true) {
				return (
					<Grid item xs={6} md={3} key={this.props.id}>
						<div data-aos="fade-up" className={(this.props.productsActivated === 1)? 'aos-animate ' : ' '} data-aos-delay={randomShowItem(1, 3)}>
							<div className="cardProduct">
								<div className="img-product">

								</div>
								<div className="info-product">
									<div className="name">
										{this.props.info.label}
									</div>
								</div>
							</div>
						</div>
					</Grid>
				);
			} else {
				return null;
			}
  	}
}

export default CardProduct;
import React from "react";
import Grid from '@material-ui/core/Grid';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Hidden from '@material-ui/core/Hidden';
import ProductsMenu from "../generals/Lineas/ProductsMenu";
import CardProduct from "../generals/Lineas/CardProduct";

class Lineas extends React.Component {
	state = {
		top: false,
		left: false,
		bottom: false,
		right: false,
	};

	toggleDrawer = (side, open) => () => {
		this.setState({
		  [side]: open,
		});
	};

	constructor() {
		super();
		/*let listProductsDesign = [
			{ 
				label: 'Color five',
				activated: false
			},
			{ 
				label: 'Diva natural maxi',
				activated: false
			},
			{ 
				label: 'Drop',
				activated: false
			},
			{ 
				label: 'Drop natural',
				activated: false
			},
			{ 
				label: 'Glenda',
				activated: false
			},
			{ 
				label: 'Ola natural',
				activated: false
			},
			{ 
				label: 'Panama',
				activated: false
			},
			{ 
				label: 'Smilla',
				activated: false
			},
			{ 
				label: 'Miss b Metal',
				activated: false
			},
			{ 
				label: 'Miss b natural',
				activated: false
			},
			{ 
				label: 'Titi',
				activated: false
			},
			{ 
				label: 'Zebra',
				activated: false
			},
			{ 
				label: 'Zebra tapizada',
				activated: false
			},
			{ 
				label: 'Zebra natural',
				activated: false
			},
			{ 
				label: 'Zebra natural tapizada',
				activated: false
			}
		]

		let listProductsInOut = [
			{ 
				label: 'Avenica',
				activated: false
			},
			{ 
				label: 'Bakhita',
				activated: false
			},
			{ 
				label: 'Bonbon',
				activated: false
			},
			{ 
				label: 'Coccolona sofa',
				activated: false
			},
			{ 
				label: 'Gio',
				activated: false
			},
			{ 
				label: 'Ginevra lounge',
				activated: false
			},
			{ 
				label: 'Iris',
				activated: false
			},
			{ 
				label: 'Isidora',
				activated: false
			},
			{ 
				label: 'Maxi diva',
				activated: false
			},
			{ 
				label: 'Maxima',
				activated: false
			},
			{ 
				label: 'Minush',
				activated: false
			},
			{ 
				label: 'Gran Minush',
				activated: false
			},
			{ 
				label: 'Ola',
				activated: false
			},
			{ 
				label: 'Olimpia',
				activated: false
			},
			{ 
				label: 'Olimpia sofá',
				activated: false
			},
			{ 
				label: 'Olimpia s / brazo',
				activated: false
			},
			{ 
				label: 'Over',
				activated: false
			},
			{ 
				label: 'Sai',
				activated: false
			},
			{ 
				label: 'Sirio',
				activated: false
			}
		]

		let listProductsCommunity = [
			{ 
				label: 'Nizza',
				activated: false
			},
			{ 
				label: 'Areta',
				activated: false
			},
			{ 
				label: 'Class',
				activated: false
			},
			{ 
				label: 'Replay',
				activated: false
			}
		]

		let listProductsConfort = [
			{ 
				label: 'Queen', 
				activated: false
			},
			{ 
				label: 'Meg', 
				activated: false
			},
			{ 
				label: 'Brigida', 
				activated: false
			},
			{ 
				label: 'Annete', 
				activated: false
			},
			{ 
				label: 'Breck', 
				activated: false
			},
			{ 
				label: 'Paris', 
				activated: false
			},
			{ 
				label: 'Pouf Prestige', 
				activated: false
			},
			{ 
				label: 'Camila', 
				activated: false
			},
			{ 
				label: 'Tula', 
				activated: false
			},
			{ 
				label: 'Kira', 
				activated: false
			},
			{ 
				label: 'Kira Divano', 
				activated: false
			},
			{ 
				label: 'Nora', 
				activated: false
			},
			{ 
				label: 'Amyope', 
				activated: false
			},
			{ 
				label: 'Rubik', 
				activated: false
			},
			{ 
				label: 'Zelig', 
				activated: false
			}
		]

		let listProductsBancos = [
			{ 
				label: 'Glenda',
				activated: false
			},
			{ 
				label: 'Divo natural',
				activated: false
			},
			{ 
				label: 'Diavoletto',
				activated: false
			},
			{ 
				label: 'Diablito',
				activated: false
			},
			{ 
				label: 'Day',
				activated: false
			},
			{ 
				label: 'Octo',
				activated: false
			},
			{ 
				label: 'Zebra',
				activated: false
			},
			{ 
				label: 'Zebra natural',
				activated: false
			},
			{ 
				label: 'Zebra natural Tap',
				activated: false
			},
			{ 
				label: 'Diva',
				activated: false
			},
			{ 
				label: 'Bon Bon',
				activated: false
			},
			{ 
				label: 'Divo',
				activated: false
			},
			{ 
				label: 'Isidoro',
				activated: false
			},
			{ 
				label: 'Bakhita',
				activated: false
			}
		]

		let listProductsMesas = [
			{ 
				label: 'Base 3 puntas',
				activated: false
			},
			{ 
				label: 'Base 4 puntas',
				activated: false
			},
			{ 
				label: 'Base cuadrada',
				activated: false
			},
			{ 
				label: 'Base nemo',
				activated: false
			},
			{ 
				label: 'Mesa metropolis',
				activated: false
			},
			{ 
				label: 'M. metropolis natural',
				activated: false
			},
			{ 
				label: 'Mesa step',
				activated: false
			},
			{ 
				label: 'Mesa olimpo',
				activated: false
			},
			{ 
				label: 'Mesa argo',
				activated: false
			},
			{ 
				label: 'Mesa claro',
				activated: false
			},
			{ 
				label: 'Mesa ribalto',
				activated: false
			}
		]

		this.listProducts = {
			'design' : listProductsDesign,
			'inout': listProductsInOut,
			'community': listProductsCommunity,
			'confort': listProductsConfort,
			'bancos': listProductsBancos,
			'mesas': listProductsMesas
		}*/

		this.listMenu = []
		
	}

	componentWillMount() {
		this.setState({listMenu: this.listMenu})
		this.setState({productsActivated: 0})
		console.log(this)
	}

	componentDidMount(prevProps) {
		AOS.init({
			once: true,
			offset: 0,
		});

		fetch(`http://192.168.64.2/lineas&products`, {
			mode :'cors', 
			method: 'GET',
			cache: 'no-cache',
			credentials: 'include',
			headers: {
				'content-type': 'application/json'
			}
		})
			.then(response => response.json())
			.then(data => {
				console.log(data);
				this.listProducts = data;
				this.listProducts.map(lineas => {
						this.listMenu.push({
							name: lineas.name,
							label: lineas.label,
							submenu: []
						});
						lineas.productLine.map(subLinea => {
							this.listMenu[this.listMenu.length-1].submenu.push({
								name: subLinea.name,
								label: subLinea.label,
								products: []
							});
							subLinea.products.map(product => {
								this.listMenu
									[this.listMenu.length-1]
									.submenu
									[this.listMenu[this.listMenu.length-1].submenu.length-1]
									.products
									.push({
										label: product.name,
										activated: false
								});
							});
						});
				});
				this.setState({listMenu: this.listMenu})
			})
			.catch((err) => {
				console.log(err);
			})
	}

	handleClick = (category, activated, product) => {
		let categoryProducts = [...this.state[category]];

		categoryProducts.forEach( (element, idx) => {
			let label = element.label.replace(/\s/g, '')
			if ( label === product) {
				categoryProducts[idx].activated = activated;
				this.setState({
					[category]: categoryProducts
				});
				
				this.setState({productsActivated: (activated)? ++this.state.productsActivated : --this.state.productsActivated});
				return 0;
			}
		});
	}
	
	render() {
	const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

		function ListMenu ({state, CardProduct}) {
			let cards = [];
			if (state.listMenu.length > 0) {
				{state.listMenu[0].submenu[0].products.map((object, i) => {
					cards.push(<CardProduct info={object} id={i} key={i} productsActivated={state.productsActivated} />)
				})}
				return cards;
			} else {
				return cards;
			}
		}


		return (
		<div className="container pt-1">

			<Hidden smUp >
				<div className="menuMobileLine" data-aos="fade-left" onClick={this.toggleDrawer('right', true)}>
					Menú
				</div>
			</Hidden>

			<SwipeableDrawer
				anchor="right"
				open={this.state.right}
				onClose={this.toggleDrawer('right', false)}
				onOpen={this.toggleDrawer('right', true)}
				disableBackdropTransition={!iOS} disableDiscovery={iOS}
				className="menuMobileLinecontent"
				>
				<div
					tabIndex={0}
				>
					<ProductsMenu productos={this.state.listMenu} onClick={this.handleClick}/>
				</div>
			</SwipeableDrawer>

			<Grid container>
				<Hidden smDown >
					<Grid item xs={12} md={3} data-aos="fade-up">
						<div className="content-ProductsMenu">
							<ProductsMenu productos={this.state.listMenu} onClick={this.handleClick}/>
						</div>
					</Grid>
				</Hidden>
				<Grid item xs={12} md={9}>
					<Grid container>
						{ListMenu({state: this.state, CardProduct: CardProduct}).map(obj => {
							return obj;
						})}
					</Grid>
				</Grid>
			</Grid>
		</div>
		);
	}
}

export default Lineas;
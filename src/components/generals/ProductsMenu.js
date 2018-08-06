import React from "react";
import ExpandMenu from './ExpandMenu';
import ListProducts from './ListProducts';

class ProductsMenu extends React.Component {

	constructor() {
		super();
		this.listProductsDesign = [
			'Color five',
			'Diva',
			'Diva natural maxi',
			'Drop',
			'Drop natural',
			'Ola natural',
			'Panama',
			'Smilla',
			'Miss b Metal',
			'Miss b natural',
			'Glenda',
			'Titi',
			'Zebra',
			'Zebra tapizada',
			'Zebra natural',
			'Zebra natural tapizada'
		]

		this.listProductsInOut = [
			'Avenica',
			'Bakhita',
			'Bonbon',
			'Coccolona',
			'Coccolona sofa',
			'Gio',
			'Ginevra lounge',
			'Iris',
			'Isidora',
			'Maxi diva',
			'Maxima',
			'Minush',
			'Gran Minush',
			'Ola',
			'Olimpia',
			'Olimpia sofá',
			'Olimpia s / brazo',
			'Over',
			'Sai',
			'Sirio'
		]

		this.tmpListProductsDesign = <ListProducts list={this.listProductsDesign} />;
		this.tmpListProductsInOut = <ListProducts list={this.listProductsInOut} />;

		this.teplate = <ExpandMenu  title="Diseño" hash="design" list={[this.tmpListProductsDesign]} />;
		this.teplate2 = <ExpandMenu  title="In & Out" hash="inOut" list={[this.tmpListProductsInOut]} />;
		this.teplate3 = <ExpandMenu  title="Community" hash="community" list={[this.tmpListProductsDesign]} />;
	}

	componentWillMount() {
        this.listProductsDesign.forEach( element => {
            var name = element.replace(/\s/g, '')
            this.setState({[name]: false})
        });
    }

	componentDidMount () {
		console.log(this)
	}

	componentDidUpdate () {
		console.log(this)
	}

	render() {
		return (
			<div className="products-menu">
				<div>
					<ExpandMenu title="Sillas" hash="sillas" list={[this.teplate, this.teplate2, this.teplate3]} />
				</div>
				<div>
					<ExpandMenu title="Confort" hash="sillas" list={[this.tmpListProductsDesign]} />
				</div>
				<div>
					<ExpandMenu title="Bancos" hash="sillas" list={[this.tmpListProductsDesign]} />
				</div>
				<div>
					<ExpandMenu title="Mesas" hash="sillas" list={[this.tmpListProductsDesign]} />
				</div>					
			</div>
		);
	}
}

export default ProductsMenu;
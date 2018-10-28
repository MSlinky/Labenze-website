import React from "react";
import ExpandMenu from './ExpandMenu';
import ListProducts from './ListProducts';

class ProductsMenu extends React.Component {

	constructor(props) {
		super(props);

		this.listListProducts = [];
		this.listListProductsSillas = [];

		this.ListProducts = ListProducts;
	}


	componentWillReceiveProps (nextProps) {
		if (Array.isArray(nextProps.productos)) {
			nextProps.productos.map(linea => {
				if (linea.submenu.length > 1) {
					linea.submenu.map(productLine => {
						let ListProducts = <this.ListProducts list={productLine.products} category={productLine.label} onClick={this.props.onClick} />;
						this.listListProducts.push(<ExpandMenu  title={productLine.name} hash={productLine.label} list={[ListProducts]} />);
					});
					this.listListProductsSillas.push(<ExpandMenu title={linea.name} hash={linea.label} list={this.listListProducts} />);
				} else {
					let ListProducts = null;
					linea.submenu.map(productLine => {
						ListProducts = <this.ListProducts list={productLine.products} category={productLine.label} onClick={this.props.onClick} />;
					});
					this.listListProductsSillas.push(<ExpandMenu title={linea.name} hash={'sillas'} list={[ListProducts]} />);
				}
			});
		}
	}

	render() {
		return (
			<div className="products-menu">
				<div>
					{this.listListProductsSillas.map((object, i) => {
						return (
							<div key={i}>
								{object}
							</div>
						)
					})}
				</div>
			</div>
		);
	}
}

export default ProductsMenu;
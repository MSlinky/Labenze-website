import React from "react";
import Checkbox from '@material-ui/core/Checkbox';

class ListProducts extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.list.forEach( element => {
            let label = element.label.replace(/\s/g, '')
            this.setState({[label]: false})
        });
    }

    handleChange = label => event => {
        const productActivated = !this.state[label];
        this.setState({ [label]: productActivated });
        this.props.onClick(this.props.category, productActivated, label);
    };

	render() {
		return (
            <ul className="listProduct">
                {this.props.list.map((element, index) => {
                    return (
                        <li key={ index } onClick={this.handleChange(element.label.replace(/\s/g, ''))} ref={element.label}>
                            <Checkbox
                                checked={this.state[element.label.replace(/\s/g, '')]}
                                value={element.label}
                                className="checkbox"
                            />
                            {element.label}
                        </li>
                    );
                })}
            </ul>
		);
	}
}

export default ListProducts;
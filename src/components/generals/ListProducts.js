import React from "react";
import Checkbox from '@material-ui/core/Checkbox';

class ListProducts extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.list.forEach( element => {
            var name = element.replace(/\s/g, '')
            this.setState({[name]: false})
        });
    }

    handleChange = name => event => {
        this.setState({ [name]: !this.state[name] });
    };

	render() {
		return (
            <ul className="listProduct">
                {this.props.list.map((name, index) => {
                    return (
                        <li key={ index } onClick={this.handleChange(name.replace(/\s/g, ''))} ref={name}>
                            <Checkbox
                                checked={this.state[name.replace(/\s/g, '')]}
                                value={name}
                                className="checkbox"
                            />
                            {name}
                        </li>
                    );
                })}
            </ul>
		);
	}
}

export default ListProducts;
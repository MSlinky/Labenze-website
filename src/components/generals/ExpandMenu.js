import React from "react";
import Collapse from '@material-ui/core/Collapse';

class ExpandMenu extends React.Component {
  state = {
    checked: false,
  };

  showSubMenu = () => {
    this.setState(state => ({ checked: !state.checked }));
  }

  render() {
    const { classes } = this.props;
    const { checked } = this.state;

    return (
      <div>
        <div onClick={this.showSubMenu}>
          Sillas
        </div>
        <Collapse in={checked} collapsedHeight="0px">
          hola munfo hsdf sfhkshkfs fsdf sd
        </Collapse>
      </div>
    );
  }
}

export default ExpandMenu;
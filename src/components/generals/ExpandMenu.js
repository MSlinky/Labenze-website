import React from "react";
import Collapse from '@material-ui/core/Collapse';
import Grid from '@material-ui/core/Grid';

class ExpandMenu extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount () {
		console.log(this)
	}

  state = {
    checked: false,
  };

  showSubMenu = () => {
    this.setState(state => ({ checked: !state.checked }));
  }

  render() {
    const { checked } = this.state;
    
    var todoItems = []

    if(this.props.list){
      todoItems = this.props.list.map((todo, index) =>
        <div key={index}>
          {todo}
        </div>
      );
    }
    

    return (
      <div className="dp-inline-block expand-menu">
        <Grid container className="container-collapse">
          <Grid item xs={2}>
            <div onClick={this.showSubMenu} className={"cp icon-menu " + this.props.hash}>
               <svg   version="1.1" id="Capa_1" x="0px" y="0px" 
                  className={'chairSVG ' + this.props.hash}
                  viewBox="0 0 512 512" 
                  width="30px" height="30px">
                  <g>
                    <circle cx="256" cy="256" r="256" data-original="#FFA547" className="circle" data-old_color="#b5d8b1"/>
                    <path d="M512,256c0-2.376-0.038-4.742-0.103-7.103L345,82L167,194l45.588,45.587L135,299.333l31.92,31.92  l-18.464,97.607l81.861,81.861C238.765,511.563,247.331,512,256,512C397.385,512,512,397.385,512,256z" data-original="#FF8940" className="sombra" data-old_color="#b5d8b1"/>
                    <rect x="186.33" y="180.67" width="27.333" height="84" data-original="#8C6E63" className="estructura" data-old_color="#ffffff"/>
                    <rect x="298.33" y="180.67" width="27.333" height="84" data-original="#6D4C41" className="estructura" data-old_color="#ffffff"/>
                    <path d="M158.25,433L158.25,433c-7.548,0-13.667-6.119-13.667-13.667V285.667h27.333v133.667  C171.917,426.881,165.798,433,158.25,433z" data-original="#8C6E63" className="estructura" data-old_color="#ffffff"/>
                    <path d="M353.75,433L353.75,433c-7.548,0-13.667-6.119-13.667-13.667V285.667h27.333v133.667  C367.417,426.881,361.298,433,353.75,433z" data-original="#6D4C41" className="estructura" data-old_color="#ffffff"/>
                    <rect x="167" y="82" width="178" height="112" data-original="#5D4037" className="estructura" data-old_color="#ffffff"/>
                    <rect x="255.95" y="82" width="89.05" height="112" data-original="#4E342E" className="estructura" data-old_color="#ffffff"/>
                    <rect x="135" y="252.67" width="242" height="46.667" data-original="#5D4037" className="estructura" data-old_color="#ffffff"/>
                    <rect x="255.95" y="252.67" width="121.05" height="46.667" data-original="#4E342E" className="estructura" data-old_color="#ffffff"/>
                  </g>
              </svg>
            </div>
          </Grid>
          <Grid item xs={10}>
            <div onClick={this.showSubMenu} className="cp lh-1-9 pl-title-menu title-menu">
              {this.props.title}
              <span>
                <svg version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 491.86 491.86" width="30px" height="30px" className={"icon-plus " + (checked ? 'hide' : '') }>
                  <path d="M465.167,211.614H280.245V26.691c0-8.424-11.439-26.69-34.316-26.69s-34.316,18.267-34.316,26.69v184.924H26.69    C18.267,211.614,0,223.053,0,245.929s18.267,34.316,26.69,34.316h184.924v184.924c0,8.422,11.438,26.69,34.316,26.69    s34.316-18.268,34.316-26.69V280.245H465.17c8.422,0,26.69-11.438,26.69-34.316S473.59,211.614,465.167,211.614z" data-original="#000000" className="active-path"/>
                </svg>
                <svg version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 16 16" width="30px" height="30px" className={"icon-plus "}>
                  <path d="M14,6H2C0.896,6,0,6.896,0,8s0.896,2,2,2h12c1.104,0,2-0.896,2-2S15.104,6,14,6z" data-original="#030104" className="active-path" fill="#000000"/>
                </svg>
              </span>
            </div>
            <Collapse in={checked} collapsedHeight="0px" className="pl-title-menu">
              <div className="products-menu">
                {todoItems}
              </div>
            </Collapse>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default ExpandMenu;
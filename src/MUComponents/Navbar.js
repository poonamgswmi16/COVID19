import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        shadows: ["none"]
    },
    flex: {
        flex: 1,
        "text-align": "center"
    },
    titleColor:{
        color:"#0098F3"
    }
});

/*const Navbar = () => {
    return(
        <div>
            <AppBar position = "static">
                 <Toolbar>
                     <Typography variant = "title" >
                     {this.props.title}
                     </Typography>
                 </Toolbar>
            </AppBar>
        </div>
    )
}*/
class Navbar extends React.Component {


    constructor(props) {
        super(props);
        this.classes = this.props.classes;
    }

    render()
    {
        return (
            <div className={this.classes.root}>
                <AppBar position="static" style={{"background-color":"limegreen"}}>
                    <Toolbar>
                        {this.props.leftList}
                        <Typography style={{"color":"yellow", "font-size":"18px", "font-family": "Monotype Corsiva"}} type="title">
                            {this.props.title}
                        </Typography>
                         {this.props.rightList}
                         
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

Navbar.propTypes = {
    classes: PropTypes.object.isRequired,
}; 

export default withStyles(styles)(Navbar);

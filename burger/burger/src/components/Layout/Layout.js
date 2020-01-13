import React from "react";
import Aux from "../../hoc/Auxx";
import classes from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import Sidedrawer from "../Navigation/Sidedrawer/Sidedrawer";

class Layout extends React.Component {
  state = {
    showSidedrowr: false
  };
  SidedrawerClosedHandler = () => {
    this.setState({ showSidedrowr: false });
  };

  sideDrowerToggler = () => {
    this.setState(prevState => {
      return { showSidedrowr: !prevState.showSidedrowr };
    });
  };

  render() {
    return (
      <Aux>
        <Toolbar drawerToggleClicked={this.sideDrowerToggler} />
        <Sidedrawer
          open={this.state.showSidedrowr}
          closed={this.SidedrawerClosedHandler}
        />
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;

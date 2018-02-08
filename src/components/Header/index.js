import React, { Component } from 'react';
import { NavBar, Icon } from 'antd-mobile';

class Header extends React.Component{
    constructor(props){
      super(props)
    }

    render(){
      const  { title, ...args } = {...this.props}
      return(
        <NavBar 
          mode="dark"
          {...args}
        >{title}</NavBar>
      )
    }
}

Header.propTypes = {};

export default Header;

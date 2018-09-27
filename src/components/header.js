import React from 'react'
import LogoWhite from '../assets/logo-white.png'
import LogoDark from '../assets/amplistic_light.png'

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
} from 'reactstrap'

export default class Header extends React.Component {
  constructor(props) {
    super(props)
    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false,
      showColor: false,
    }
  }
  checkScroll(){
    if(document.documentElement.scrollTop > 80){
      if(!this.state.showColor){
        this.setState({ showColor: true })
      }
    }else {
      if(this.state.showColor){
        this.setState({ showColor: false })
      }
    }
  }
  componentDidMount(){
    this.checkScroll()
    document.addEventListener('scroll', () => {
      this.checkScroll(); 
    })
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }
  render() {
    const { isDark = true } = this.props;
    return (
      <Navbar dark={isDark} light={!isDark} className={`navbar-main sticky-top ${this.state.showColor ? 'color-menu' : ''}`} sticky expand="md">
        <Container>
          <NavbarBrand href="/">
            <img src={isDark ? LogoWhite : LogoDark} alt="Logo White" />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto">
              <NavItem>
                <NavLink href="/#home">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/#about">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/#services">Services</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="./case-studies">Case Studies</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/#contact">Contact</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    )
  }
}

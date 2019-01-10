import React, { Component } from 'react'
import { Image, Menu, Dropdown, Button } from 'semantic-ui-react'
import logo from '../../images/logo-sans-fond_nopadding.png';


export default class MenuDesktop extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
    <div>
      <Menu  size='massive' >
      
      <Menu.Menu position='left'>
        <Image src={logo} style={{ 'width': '230px', 'height': '100px'}} />
      </Menu.Menu>
      <Menu.Menu position='right'>
      <Menu.Item>
            <h1>Messagerie</h1>
      </Menu.Item>
      <Menu.Item>
            <h1>Documents</h1>
      </Menu.Item>
      <Menu.Item>
            <h1>Notifications</h1>
      </Menu.Item>
      <Dropdown item text='Profil'>
            <Dropdown.Menu>
              <Dropdown.Item>English</Dropdown.Item>
              <Dropdown.Item>Russian</Dropdown.Item>
              <Dropdown.Item>Spanish</Dropdown.Item>
            </Dropdown.Menu>
      </Dropdown>
      </Menu.Menu>
    </Menu>
    <div style style={{ 'height': '200px'}} >
    </div>

    <Menu size='massive'>
        <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
        <Menu.Item
          name='Dashbord'
          active={activeItem === 'messages'}
          onClick={this.handleItemClick}
        />

        <Menu.Menu position='right'>
          <Dropdown item text='Thèmes'>
            <Dropdown.Menu>
              <Dropdown.Item>English</Dropdown.Item>
              <Dropdown.Item>Russian</Dropdown.Item>
              <Dropdown.Item>Spanish</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown item text='Services'>
            <Dropdown.Menu>
              <Dropdown.Item>English</Dropdown.Item>
              <Dropdown.Item>Russian</Dropdown.Item>
              <Dropdown.Item>Spanish</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Menu.Item name='Devis & Factures' active={activeItem === 'Devis&Factures'} onClick={this.handleItemClick} />  
        </Menu.Menu>
      </Menu>
    </div> 
    )
  }
}
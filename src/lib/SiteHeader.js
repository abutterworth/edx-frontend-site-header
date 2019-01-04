import React from 'react';
import classNames from 'classnames';
import { 
  Hyperlink, 
  Button,
  SearchField,
  breakpoints, ExtraSmall, Small, Medium, Large, ExtraLarge, LargerThanExtraSmall
} from '@edx/paragon';

import Menu, { MENU_TYPES } from './Menu';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faBars, faTimes, faSearch, 
  faChevronLeft, faChevronRight, faChevronDown,
  faUserCircle
} from '@fortawesome/free-solid-svg-icons'
library.add(faBars, faTimes, faSearch, faChevronLeft, faChevronRight, faChevronDown, faUserCircle);


export default class SiteHeader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      panelSubmenuOpen: false
    };
  }

  render() {
    return (
      <div>
        <ExtraSmall>{this.renderMobileNav()}</ExtraSmall>
        <Small>{this.renderMobileNav()}</Small>
        <Medium>{this.renderDesktopNav()}</Medium>
        <Large>{this.renderDesktopNav()}</Large>
        <ExtraLarge>{this.renderDesktopNav()}</ExtraLarge>
      </div>
    );
  }

  renderMobileNav() {
    return (
      <header className="site-header mobile">
        <div className="container-fluid">
        <div className="row flex-nowrap">

          <div className="site-header-col d-flex align-items-center">
            <Menu
              className="site-header-menu"
              {...MENU_TYPES.OverlayPanel}
              triggerClassName="btn"
              triggerContent={<FontAwesomeIcon icon="bars" />}
            >
              {this.renderSlidingPanelMenu()}
            </Menu>
          </div>

          <div className="brand site-header-col d-flex justify-content-center align-items-center">
            {this.renderLogo()}
          </div>

          <div className="secondary-menu-container site-header-col d-flex justify-content-end align-items-center">
            <Menu
              className="site-header-menu"
              triggerClassName="btn"
              triggerContent={<FontAwesomeIcon icon="search" />}
            >
              <SearchField onSubmit={(value) => { console.log(value); }} />
            </Menu>

            <Menu
              className="site-header-menu"
              triggerClassName="btn"
              triggerContent={<FontAwesomeIcon icon="user-circle" />}
            >
              {this.renderAccountMenuContent()}
            </Menu>
          </div>

        </div>
        </div>
      </header>
    );
  }

  renderSlidingPanelMenu() {
    return (
      <div className={classNames("slide-panel-menu", {
        "panel-submenu-open": this.state.panelSubmenuOpen
      })}>
          <nav className="nav flex-column menus-container">{
            this.props.desktopMenuItems.map(function(item, index) {

              if (item.submenu) {

                return (
                  <Menu 
                    key={"menu-" + index}
                    className="sliding-menu"
                    triggerClassName="nav-link"
                    triggerContent={<span>{item.content} ›</span>}
                    triggerDestination={item.destination}
                    onOpen={() => { this.setState({panelSubmenuOpen:true}) }}
                    onClose={() => { this.setState({panelSubmenuOpen:false}) }}
                    closeButton={<button className="nav-link" type="button">‹ <span>Close</span></button>}
                    transitionTimeout={400}
                    closeOnDocumentClick={false}
                  >
                    {item.submenu}
                  </Menu>
                );

              } else {

                return (
                  <Hyperlink 
                    className="nav-link"
                    key={'link-' + index}
                    {...item} 
                  />
                );

              }

            }, this)
          }</nav>
      </div>
    )
  }

  renderDesktopNav() {
    return (
      <header className="site-header desktop">
        <div className="container-fluid">
        <div className="nav-container d-flex align-items-end">
          
          <div className="brand">
            {this.renderLogo()}
          </div>
          
          <div className="flex-grow-1 d-flex flex-column-reverse">

            <div className="nav primary-menu-container">
              {this.props.desktopMenuItems.map(function(item, index) {
                if (item.submenu) {
                  return (
                    <Menu 
                      key={"menu-" + index}
                      triggerClassName="nav-link"
                      triggerContent={<span>{item.content} <FontAwesomeIcon icon="chevron-down" /></span>}
                      triggerDestination={item.destination}
                      respondToPointerEvents
                    >
                      {item.submenu}
                    </Menu>
                  );
                } else {
                  return (
                    <Hyperlink 
                      className={classNames("nav-link", item.name + "-nav-link")}
                      key={'link-' + index}
                      {...item} 
                    />
                  )
                }
              })}
            </div>

            <div className="nav align-self-end secondary-menu-container align-items-start mb-4 mt-3">
              <form class="form-inline">

                <div class="input-group">
                  <input type="text" class="form-control form-control-sm" placeholder="Search for subjects and more..." />
                  {/*<div class="input-group-append">
                    <button class="btn btn-outline-secondary btn-sm" type="button">Search</button>
                  </div>*/}
                </div>
              </form>
              
              {
                this.props.secondaryMenuItems.map(function(item, index){
                  if (item.submenu) {
                    return (
                      <Menu 
                        key={"secondary-menu-" + index}
                        triggerClassName={classNames("btn btn-sm ml-sm-2", item.triggerClassName)}
                        triggerContent={<span>{item.content} <FontAwesomeIcon icon="chevron-down" /></span>}
                        triggerDestination={item.destination}
                      >
                        {item.submenu}
                      </Menu>
                    );
                  } else {
                    return (
                      <Hyperlink 
                        className={classNames("btn btn-sm ml-sm-2", item.triggerClassName)}
                        key={'link-' + index}
                        {...item} 
                      />
                    )
                  }
                },this)
              }
            </div>


          </div>
        </div>
        </div>
      </header>
    );
  }

  renderLogo() {
    return (
      <Hyperlink 
        className="header-logo" 
        content={<img src={this.props.logo} alt={this.props.logoAltText} />} 
        destination={this.props.logoDestination}
      />
    )
  }

  renderAccountMenuContent() {
    return (
      <div>
        <Hyperlink className="btn btn-primary btn-block" content="Sign In" destination="#" />
        <Hyperlink className="btn btn-secondary btn-block" content="Register" destination="#" />
      </div>
    )
  }
}
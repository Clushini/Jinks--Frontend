import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import navitems from './utils/nav';
import Logo from '../../media/logo.png';
import HelpIcon from '../../media/icons/help.png';

const determineCollapsedButton = (state) => {
    if (!state) {
        return <>&lt;</>;
    }
    else {
        return <>&gt;</>;
    }
}

const Navigation = (props) => {
    const [collapsed, setCollapsed] = useState(false);
    const [currentNavItem, setCurrentNavItem] = useState(window.location.pathname);

    let wrapStyle = collapsed ? {width: "80px"} : {width: "240px"};
    let collapseButtonStyle = collapsed ? {marginLeft: "70px", marginTop: "30px"} : {marginLeft: "230px", marginTop: "50px"};
    let buttonStyle = collapsed ? {justifyContent: "center", paddingLeft: "8px"} : {justifyContent: "start"};
    let iconStyle = collapsed ? {width: "23px", marginRight: "0px"} : {width: "17px"};

    console.log(window.location.pathname)
    return (
        <div id="navwrap" style={wrapStyle}>

            <div className="logo">
                <img src={Logo} alt="Logo" />
            </div>

            <div className="collapse" style={collapseButtonStyle} onClick={() => setCollapsed(!collapsed)}>
                {
                    determineCollapsedButton(collapsed)
                }
            </div>

            <div className="linkwrap">
                {
                    navitems.map(navitem => {
                        return  <Link to={navitem.path}>
                                    <Button variant="text" color="primary" className={(currentNavItem == navitem.path) ? "activebutton" : ""} style={buttonStyle} onClick={() => setCurrentNavItem(navitem.path)}>
                                        <img src={navitem.icon} alt="link" style={iconStyle}/>
                                        {
                                            !collapsed && <div>{navitem.name}</div>
                                        }
                                    </Button>
                                </Link>
                    })
                }
            </div>

            <div className="bottombutton">
                <b />
                <Link to={"/helpus"}>
                    <Button variant="text" color="primary" className={(currentNavItem == '/helpus') ? "activebutton" : ""} style={buttonStyle} onClick={() => setCurrentNavItem('/helpus')}>
                        <img src={HelpIcon} alt="link" style={iconStyle}/>
                        {
                            !collapsed && <div>Report Bug / Issue</div>
                        }
                    </Button>
                </Link>
            </div>

        </div>
    )
}

export default Navigation;
import React, { useState } from 'react';
import InputWithIcon from '../inputs/inputwithicon';
import ProfilePicPlaceholder from '../../media/icons/user.png';
import DownArrow from '../../media/icons/down-arrow.png';
import Notification from '../../media/icons/bell.png';
import Drop from '../util/drop';

const UserBar = (props) => {
    const [currentDrop, setCurrentDrop] = useState(null);

    return(
        <div className="userbar">
            <InputWithIcon />
            <div className="userwrap">
                <div className="left">
                    { currentDrop == "profile" && <Drop clickedOutside={() => setCurrentDrop(null)} margintop="60px"/> }
                    <div className="info">
                        <h3>Aaron Lilla</h3>
                        <h4>Master</h4>
                    </div>
                    <img src={ProfilePicPlaceholder} alt="profile"/>
                    <div className="arrow" onClick={() => setCurrentDrop((currentDrop == "profile") ? null : "profile")}>
                        <img src={DownArrow} alt="downarrow" />
                    </div>
                </div>
                <div className="right">
                    <img src={Notification} alt="notification" />
                </div>
            </div>
        </div>
    );
}

export default UserBar;
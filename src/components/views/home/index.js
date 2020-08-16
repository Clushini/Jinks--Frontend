import React from 'react';
import PageHeader from '../../dashboard/utils/header';
import Tile from '../../dashboard/utils/tile';

import LinkTileIcon from '../../../media/icons/tileicons/link.png';
import NoteTileIcon from '../../../media/icons/tileicons/note.png';
import SearchTileIcon from '../../../media/icons/tileicons/search.png';

const Home = (props) => {
    return(
        <div className="pagewrap">
            <PageHeader main={"Dashboard"} secondary={"Dashboard & User Statistics"}/>
            <div className="tilewrap">
                <Tile icon={LinkTileIcon}/>
                <Tile icon={NoteTileIcon}/>
                <Tile icon={SearchTileIcon}/>
                <Tile icon={SearchTileIcon}/>
            </div>
        </div>
    );
}

export default Home;
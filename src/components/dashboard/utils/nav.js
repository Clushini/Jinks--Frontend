import UserManagement from '../../views/usermanagement/index';
import Search from '../../views/search/index';
import LinkManager from '../../views/linkmanager/index';
import Home from '../../views/home/index';

import HomeIcon from '../../../media/icons/home.png';
import LinkIcon from '../../../media/icons/link.png';
import SearchIcon from '../../../media/icons/search.png';
import SettingsIcon from '../../../media/icons/settings.png';

const navitems = [
    {name: "Home", component: Home, path: "/home", icon: HomeIcon},
    {name: "Search", component: Search, path: "/search", icon: SearchIcon},
    {name: "Link Manager", component: LinkManager, path: "/linkmanager", icon: LinkIcon},
    {name: "User Management", component: UserManagement, path: "/usermanagement", icon: SettingsIcon},
]

export default navitems;
import UserManagement from '../../views/usermanagement/index';
import Search from '../../views/search/index';
import LinkManager from '../../views/linkmanager/index';
import NoteManagement from '../../views/notemanagement/index';
import Home from '../../views/home/index';
import Help from '../../views/help/index';
import QuickSave from '../../views/quicksave/index';

import HomeIcon from '../../../media/icons/home.png';
import LinkIcon from '../../../media/icons/link.png';
import SearchIcon from '../../../media/icons/search.png';
import SettingsIcon from '../../../media/icons/settings.png';
import NoteIcon from '../../../media/icons/note.png';
import HelpIcon from '../../../media/icons/help.png';

export const navitems = [
    {name: "Home", component: Home, path: "/home", icon: HomeIcon},
    {name: "Link Manager", component: LinkManager, path: "/linkmanager", icon: LinkIcon},
    {name: "Note Manager", component: NoteManagement, path: "/notemanager", icon: NoteIcon},
    {name: "Settings", component: UserManagement, path: "/usermanagement", icon: SettingsIcon},
    {name: "Help", component: Help, path: "/help", icon: HelpIcon}
]

export const quicknav = [
    {name: "Quick Search", component: Search, path: "/search", icon: SearchIcon},
    {name: "Quick Save", component: QuickSave, path: "/quicksave", icon: NoteIcon}
]

export default navitems;
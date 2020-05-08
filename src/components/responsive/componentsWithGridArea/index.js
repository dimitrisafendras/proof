import {
	withGridArea
} from '../../hocs';
import { Header } from '../header';
import { Sidebar } from '../sidebar';


export const HeaderWithGridArea = withGridArea(Header);
export const SidebarWithGridArea = withGridArea(Sidebar)

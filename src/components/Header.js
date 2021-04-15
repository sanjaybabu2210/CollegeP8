import { Icon } from '@iconify/react';
import locationIcon from '@iconify/icons-mdi/account'

const Header = () => {
    return (
        <header className="header">
            <h1><Icon icon={locationIcon}/> Person Tracker</h1>
        </header>
    );
}

export default Header;
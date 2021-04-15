import React from 'react';
import { Icon } from '@iconify/react';
import locationIcon from '@iconify/icons-mdi/account';

const SideBarElement = ({lat, lng, onClick}) => {
    return(
        <div className="" onClick={onClick}>
            <Icon icon={locationIcon} className="location-icon"/>
        </div>
    );
}

export default SideBarElement;
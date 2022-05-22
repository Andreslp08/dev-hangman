import { Icon } from '@iconify/react';
import React from 'react';


export const ConfigButton = (props)=>{
    const {onSelect} = props;
    return (<button className='config-button text-xl border-full' onClick={()=>onSelect&&onSelect()}>
        <Icon icon={'charm:menu-hamburger'}/>
    </button>)
}
import {
    LAYOUT_SHOW_SIDEMENU,
    LAYOUT_HIDE_SIDEMENU,
    LAYOUT_SET_MENUKEYS,
    LAYOUT_HIDE_MOBILEMENU,
    LAYOUT_SHOW_MOBILEMENU,
} from '../../constants/ActionTypes';

export const showSideMenu = () => {
    return { type: LAYOUT_SHOW_SIDEMENU };
}

export const hideSideMenu = () => {
    return { type: LAYOUT_HIDE_SIDEMENU };
}

export const setMenuKeys = (values) => {
    return { type: LAYOUT_SET_MENUKEYS, payload: values };
}

export const hideMobileMenu = () => {
    return { type: LAYOUT_HIDE_MOBILEMENU };
}

export const showMobileMenu = () => {
    return { type: LAYOUT_SHOW_MOBILEMENU };
}
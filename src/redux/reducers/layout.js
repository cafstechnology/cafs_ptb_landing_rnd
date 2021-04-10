import {
    LAYOUT_SHOW_SIDEMENU,
    LAYOUT_HIDE_SIDEMENU,
    LAYOUT_SHOW_MOBILEMENU,
    LAYOUT_HIDE_MOBILEMENU,
    LAYOUT_SET_MENUKEYS,
} from '../../constants/ActionTypes';

const INIT_STATE = {
    sidemenu: false,
    openKeys: ['master'],
    selectedKeys: ['master.company'],
    mobilemenu: false
};

const app = (state = INIT_STATE, action) => {
    switch (action.type) {
        case LAYOUT_SHOW_SIDEMENU: {
            return {
                ...state,
                sidemenu: true
            };
        }
        case LAYOUT_HIDE_SIDEMENU: {
            return {
                ...state,
                sidemenu: false
            };
        }
        case LAYOUT_SHOW_MOBILEMENU: {
            return {
                ...state,
                mobilemenu: true
            };
        }
        case LAYOUT_HIDE_MOBILEMENU: {
            return {
                ...state,
                mobilemenu: false
            };
        }
        case LAYOUT_SET_MENUKEYS: {
            const { payload } = action;
            return {
                ...state,
                openKeys: payload.openKeys,
                selectedKeys: payload.selectedKeys,
            };
        }
        default:
            return state;
    }
}

export default app;

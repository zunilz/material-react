export default function (state = null, action) {
    switch (action.type) {
        case 'DRAWER_OPEN':
            return action.payload;
            break;
    }

    return state;
}
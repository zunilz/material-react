export const drawerStateChange = (drawer) => {
    console.log("You clicked on : ", drawer);
    return {
        type: 'DRAWER_OPEN',
        payload: drawer
    }
};

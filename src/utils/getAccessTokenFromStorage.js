export const getAccessTokenFromStorage = () => {
    const token = sessionStorage.getItem("spotifyToken");
    if(token !== null) {
        return token;
    } else {
        console.log('Det finns ingen token')
        return false;
    }
}
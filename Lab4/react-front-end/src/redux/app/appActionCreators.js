export function getAuthorisationStatus() {
    return async (dispatch) => {
        try {
            const response = await fetch('http://localhost:8080/?param=is_authorised', {
                method: 'GET',
                headers: {
                    'Accept': 'application/json'
                }
            });


            const authorisationStatus = await response.json();

            dispatch({ type: 'SET_AUTHORISATION_STATUS', authorisationStatus: authorisationStatus });
        } catch (error) {
            console.log("error");
            // dispatch({ type: 'LOAD_DATA_TABLE', data: error.message });
        }
    };
}
export function getUsername() {
    return async (dispatch) => {
        try {
            const response = await fetch('http://localhost:8080/?param=get_username', {
                method: 'GET',
                headers: {
                    'Accept': 'application/json'
                }
            });


            const username = await response.json();

            dispatch({ type: 'SET_USERNAME', username: username.username });
        } catch (error) {
            console.log("error");
            // dispatch({ type: 'LOAD_DATA_TABLE', data: error.message });
        }
    };
}

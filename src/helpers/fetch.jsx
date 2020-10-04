const baseUrl = process.env.REACT_APP_API_URL;



const fetchSinToken = ( endpoint, data, method = 'GET' ) =>{

    let url=`${ baseUrl }/${ endpoint }`; 

    if ( method === 'GET') {
        switch ( endpoint ) {
        case 'users':
            if (data.password) {
                url = `${ url }?email=${data.email}&password=${data.password}`;
            } else {
                url = `${ url }?email=${data.email}`;
            }
            break
            case 'orders':
                url = url = `${ url }?user=${data.uid}`;  
                break;          
        }
        return fetch( url );
    } else {
        return fetch( url, {
            method,
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify( data )
        });
    }

}

/*const fetchConToken = ( endpoint, data, method = 'GET' ) =>{

    const url=`${ baseUrl }/${ endpoint }`; 
    const token = localStorage.getItem('token') || '';

    if ( method === 'GET') {
        return fetch( url, {
            method,
            headers: {
                'x-token': token
            }
        } );
    } else {
        return fetch( url, {
            method,
            headers: {
                'Content-type': 'application/json',
                'x-token': token
            },
            body: JSON.stringify( data )
        });
    }

}*/




export {
    fetchSinToken,
    // fetchConToken
}
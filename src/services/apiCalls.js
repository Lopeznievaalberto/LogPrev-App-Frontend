
import axios from 'axios';
const root = 'http://localhost:5600/';

export const getTests = async () => {
    return await axios.get(`${root}tests/`);
};

export const postLogin = async (credenciales) => {
    return await axios.post(`${root}users/login`, credenciales);
};

export const postRegistered = async (body) => {
    return await axios.post(`${root}users/newUser`, body)
}

export const getSearch = async (criterioBusqueda) => {
    return await axios.get(`${root}users/getallUsers?user=${criterioBusqueda}`);
}

export const allUsersAdmin = async (token) => {

    let config = {
        headers: { Authorization: `Bearer ${token}` },
    };
    return await axios.get(`${root}users/getAll`, config);

};






export const postRent= async (body, token) => {

    // let config = {
    //     headers: { Authorization: `Bearer ${token}` }
    // };
    return await axios.post(`${root}tests/newTest`, body, config);
};

// export const allUsersAdmin = async (token) => {
//     let config = {
//         headers: { 
//             'Authorization': 'Bearer ' + token
//           }
//     }
//     return await axios.get(`${root}rentals/getAll`, config);
// }
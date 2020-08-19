import axios from 'axios';
let address = "http://localhost:4000/";

export function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

// saveLinkToDatabase = () => {
//   let link = this.state.link;
//   axios.post(`${address}/savelink`, { link })
//   .then(res => {
//     console.log(res);
//     console.log(res.data);
//   })
// }
  
// retrieveResults = (searchTerm) => {
//   axios.post(`${address}/link`, { searchTerm })
//   .then(res => {
//     const data = [...res.data];
//     let fixedData = [];

//     data.map(item => {
//       let link = item.link;
//       let exists = false;
//       fixedData.map(fixedItem => {
//         if (fixedItem.link == link) {
//           exists = true;
//         }
//       })

//       if (!exists) {
//         fixedData.push(item);
//       }
//     })

//     this.setState({
//       results: fixedData
//     })
//   })
// }

export const registerUser = (username, password) => {
  return axios.post(`${address}api/register`, { "email": username, "password": password })
  .then(res => {
    return res
  })
}

export const getLogin = (username, password) => {
  return axios.post(`${address}api/authenticate`, { "email": username, "password": password })
  .then(res => {
    return res
  })
}

export const isLoggedIn = () => {
  return axios.post(`${address}checkToken`, {})
  .then(res => {
    return res
  })
}

export const checkAuthorization = () => {
  return axios.post(`${address}api/isauthorized`, {token: getCookie("token")})
  .then(res => {
    console.log(getCookie("token"))
    return res
  })
}

export const saveLink = (link) => {
  return axios.post(`${address}savelink`, {link: link, token: getCookie('token')})
  .then(res => {
    return res
  })
}

export const submitSearch = (searchterm) => {
  return axios.post(`${address}search`, {searchTerm: searchterm, username: getCookie('login'), token: getCookie('token')})
  .then(res => {
    return res
  })
}

export const getUserData = () => {
  return axios.post(`${address}api/getuserdata`, {token: getCookie('token')})
  .then(res => {
    return res
  })
}

export const getLinkPreview = (input) => {
  return axios.post(`${address}api/getlinkpreview`, {link: input, token: getCookie('token')})
  .then(res => {
    return res
  })
}
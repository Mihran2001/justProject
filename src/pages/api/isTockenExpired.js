import jwt from 'jsonwebtoken';

const isTokenExpired = () => {
  const token = localStorage.getItem('access_token');
  let decodedToken=jwt.decode(token, {complete: true});
  let dateNow = new Date();
    const access_token = localStorage.getItem("access_token");
    if (access_token && decodedToken.exp < dateNow.getTime()) {
      return true;
    }
    return false;
  };   
  
  export default isTokenExpired;







  
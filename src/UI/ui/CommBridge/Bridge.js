 const axios = require('axios');


 axios.defaults.baseURL= "http://localhost:8080/service";
 axios.defaults.headers.post['Content-Type'] =  "application/json";


 export default axios.create();


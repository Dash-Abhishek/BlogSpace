 const axios = require('axios');


 axios.defaults.baseURL= "http://localhost:3030";
 axios.defaults.headers.post['Content-Type'] =  "application/json";


 export default axios.create();


import axios from'axios';

export default axios.create({
headers:{
    baseURL:'https://api.unsplash.com',
    Authorization:
    'Client-ID 7X0t9d2LlVbYou9xPcllID5j6_TWHDYrhOiM7vAGP6M'
    }
});


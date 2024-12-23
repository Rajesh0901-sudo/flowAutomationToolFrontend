import axios from 'axios';

const url = 'http://localhost:5000'

export const runQueryAPI = async (payload)=>{
    try {
        const response = await axios.post(`${url}/run_query_api`, payload);
        return [response,200]

      } catch (error) {
        return [error,400]
      }
}

export const addEnvAPI = async (payload)=>{
    console.log(typeof(payload),JSON.parse(payload))
    try {
        const response = await axios.post(`${url}/add_env`, JSON.parse(payload));
        return [response,200];
      } catch (error) {
        return [error,400];
      }
}

export const addCustomerAPI = async (payload)=>{
    console.log(typeof(payload),JSON.parse(payload))
    try {
        const response = await axios.post(`${url}/add_customer`, JSON.parse(payload));
        return [response,200];
      } catch (error) {
        return [error,400];
      }
}


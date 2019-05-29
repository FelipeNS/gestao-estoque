import { create } from 'apisauce';

const api = create({
    baseURL: 'https://api.vife.dev/stock_management/api/'
})

api.addResponseTransform( response => {
    if(!response.ok) throw response;
})

export default api;
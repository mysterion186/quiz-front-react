import axios, { AxiosInstance, AxiosResponse } from "axios";

const instance = axios.create({
	baseURL: process.env.REACT_APP_API_URL
});

type type_headers = {
    'Content-type' : string;
    authorization? : string;
}

export default {

    async call(method: string, ressources: string, data: object | null, token : string | null){
        var headers : type_headers= {
            "Content-type" : "application/json",
        };
         if (token !== null){
            headers.authorization =  "Bearer " + token;
        }
        return instance({
            method, 
            headers : headers,
            url : ressources,
            data
        }).then((response) => {
            return {status: response.status, data : response.data};
        }).catch((err) => {
            return {status: err.response.status, data : err.response.data};
        })
    },
    
    getQuizInfo(){
        return this.call("get","quiz-info", null, null);
    },

}

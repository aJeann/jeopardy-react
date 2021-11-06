import axios from 'axios';

const JEOPARDY_BASE_REST_API_URL = 'http://localhost:8080/api/v1/jeopardy';

class JeopardyService{

    getAllJeopardys(){
        return axios.get(EXERCISES_BASE_REST_API_URL);
    }
    getJeopardyGame(id){
        return axios.get(EXERCISES_BASE_REST_API_URL+'/'+id)
    }
}

export default new JeopardyService();
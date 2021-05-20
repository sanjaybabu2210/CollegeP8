import axios from 'axios';
export default axios.create(
    {
        baseURL: 'https://tarp-project-ee72f-default-rtdb.firebaseio.com/'
    }
)
import { useState } from 'react';
import axios from 'axios';
import { v4 as uuid } from 'uuid';

const useFlip = (state = true) => {
    const [isFacingUp, setIsFacingUp] = useState(state);
    const flip = () => {
        setIsFacingUp(isUp => !isUp);
    };
    return [isFacingUp, flip]
}

const useAxios = (url) => {
    const [response, setResponse] = useState([]);

    const addData = async ( params = '') => {
        console.log(params)
        const res = await axios.get(`${url}${params}`);
        setResponse(data => [...data, { ...res.data, id: uuid() }]);
    };
    return [response, addData]
}



export { useFlip, useAxios }
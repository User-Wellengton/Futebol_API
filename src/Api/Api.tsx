const URL = 'https://api-football-v1.p.rapidapi.com/v3/';

export const fetchData = async (endpoint: string, params: string = '',) => {
    try {
        const response = await fetch(URL + endpoint + params, {
            headers: {
                'X-RapidAPI-Key': '98a8f728b0msha22da8563415e70p1d4be0jsn440d1b23ce8c',
                'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
            },
            method: 'GET',
        });
        const data = await response.json();
        return data.response;
    } catch (error) {
        console.log(error);
        return [];
    }
};
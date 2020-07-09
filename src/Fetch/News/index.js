import axios from './axios-news'

export const getNews = async (sourceId) => {
    try {
        const res = await axios.get("/everything", {
            params: {
                sources: sourceId
            }
        });
        return res.data;
    }
    catch (e) {
        return {
            data: [],
            error: e.message
        };
    }
}


export const getTopNews = async () => {
    try {
        const res = await axios.get("/top-headlines");
        return res.data;
    }
    catch (e) {
        return {
            data: [],
            error: e.message
        };
    }
}

export const getSources = async () => {
    try {
        const res = await axios.get("/sources");
        return res.data;
        
    }
    catch (e) {
        return {
            data: [],
            error: e.message
        };
    }
}
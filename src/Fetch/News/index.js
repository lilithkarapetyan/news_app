import axios from './axios-news'

export const getNews = async (sourceId, searchTxt) => {
    try {
        const res = await axios.get("/everything", {
            params: {
                sources: sourceId,
                q: searchTxt || ''
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


export const getTopNews = async (searchTxt) => {
    try {
        const res = await axios.get("/top-headlines", {
            params: {
                q: searchTxt || ''
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
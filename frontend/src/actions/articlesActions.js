import * as api from "../api/articleAPI";
import { setArticles } from "../redux/articleSlice";

export const getArticles = (query) => async (dispatch) => {
    try {
        const { data } = await api.getArticlesData(query);
        dispatch(setArticles(data?.articles));
    } catch (error) {
        console.log(error);
    }
}
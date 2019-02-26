const API_KEY = 'apikey=09c3da59a2f743c3aee903074af36eef';
const API_STEM = 'https://newsapi.org/v2/';
const API_LANG = 'language=en';
const API_COUNTRY = 'country=gb';
const PAGE_SIZE = 10;


export default class NewsAPI {
    constructor() {
        this.newsUri = this.newsUri.bind(this);
        this.fetchHeadlines = this.fetchHeadlines.bind(this);
    }

    newsUri(selection = 'top-headlines', topic = 'technology', keywords = null) {
        let query;
        if (keywords !== null && keywords.includes(' ')) {
            query = keywords.split(' ').join('+');
        } else if (keywords !== null) {
            query = keywords;
        }
        return `${API_STEM}${selection}?${API_COUNTRY}&category=${topic}&pageSize=${PAGE_SIZE}&${API_KEY}`;
    }

    renderArticleList(responseJSON) {
        let articles = null;
        if (responseJSON.hasOwnProperty('articles')) {
            articles = [];
            responseJSON.articles.forEach((item, index, array) => {
                if (item.urlToImage !== null && item.content !== null) {
                    articles.push({key: item});
                }
            });
        }
        return articles;
    }

    fetchHeadlines(selection = 'top-headlines', topic = 'technology', keywords = null) {
        return fetch(this.newsUri(selection, topic, keywords))
            .then(response => response.json())
            .then(responseJSON => {
                return this.renderArticleList(responseJSON);
            })
            .catch(error => {
                console.log(error);
            })
    }
}

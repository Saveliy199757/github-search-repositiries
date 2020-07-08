export default class GithubApiService {
    _apiBase = 'https://api.github.com/search/';

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` +
                `, received ${res.status}`)
        }
        return await res.json();
    };

    getRepositories = async (text) => {
        return await this.getResource(`repositories?q=${text}`);
    };
}
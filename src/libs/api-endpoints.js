class ApiEndpoints {

    constructor(apiKey = "test") {
        this.apiKey = apiKey;
    }

    add(key, url) {
        this[key] = `${url}&api-key=${this.apiKey}`
    }

    addAll(list) {
        if (!list) { return false; }
        for (const [key, url] of Object.entries(list)) {
            this.add(key, url);
        }
    }
}
let apiKey = '8916ba2a-33d4-4505-81b8-d33b6b6d753c';
let apiEndpoints = new ApiEndpoints(apiKey);

/**
 * Endpoints URLs
 */
let endPoints = {
    topNews: "https://content.guardianapis.com/search?section=news&page-size=8&show-fields=body%2Cthumbnail,trailText",
    sports: "https://content.guardianapis.com/search?section=sport&page-size=3&show-fields=body%2Cthumbnail",
    search: "https://content.guardianapis.com/search?page-size=15&show-fields=body%2Cthumbnail",
    single: "https://content.guardianapis.com/search?page-size=1&show-fields=body%2Cthumbnail%2CtrailText,headline&order-by=oldest",
    category: "https://content.guardianapis.com/search?page-size=15&show-fields=body%2Cthumbnail%2CtrailText,headline",
    bookmark: "https://content.guardianapis.com/search?page-size=15&show-fields=body%2Cthumbnail&order-by=oldest",
}


apiEndpoints.addAll(endPoints);
export default apiEndpoints; 
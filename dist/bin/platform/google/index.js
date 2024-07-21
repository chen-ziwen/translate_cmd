import { getPlatformConfig, matchPlatformLanguageCode } from "../../../util/helpers.js";
export class Google {
    constructor(name) {
        this.mName = name;
        this.mTitle = "谷歌翻译";
    }
    async url(query) {
        const { source, target } = await getPlatformConfig(this.mName);
        const langCode = matchPlatformLanguageCode(this.mName, { source, target });
        const params = new URLSearchParams({
            client: "gtx",
            tl: langCode.source,
            sl: langCode.target,
            dt: "t",
            q: query.join(" "),
        });
        return "https://translate.google.com/translate_a/single?" + params.toString();
    }
    async translate(query) {
        const url = await this.url(query);
        return fetch(url)
            .then(res => res.json())
            .then(data => {
            var _a, _b;
            return (_b = (_a = data[0]) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b[0];
        })
            .catch((err) => {
            console.error(err);
        });
    }
}
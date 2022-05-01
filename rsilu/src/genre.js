function execute() {
    let response = fetch("https://www.rsilu.com/all/");

    if (response.ok) {
        let doc = response.html('gbk');
        let genres = [];
        doc.select(".listLeft ul").first().select("a").forEach(e => {
            genres.push({
                title: e.text(),
                input: e.attr("href") ? e.attr("href") : "https://www.rsilu.com/all/0_lastupdate_0_0_0_0_0_0_1.html",
                script: "gen.js"
            });
        });
        return Response.success(genres);
    }
    return null;
}
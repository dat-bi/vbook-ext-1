function execute(url) {
    if(url.slice(-1) === "/")
        url = url.slice(0, -1)
    let page = 1;

    const data = [];

    while (true) {
        let url1 =  url + "?type=&page=" + page;
        let response = fetch(url1);
        if (response.ok){
            let doc = response.html();
            let el1 = doc.select(".result").last().text().length;
            if(el1 < 1 || page >5)
            {
                return Response.success(data);
            }
            else{
                data.push({
                    name: "页" + page,
                    url: url + "?type=&page=" + page,
                    host: "https://www.yousuu.com"
                });
                page++;
            }
        }
    }


    return null;
}
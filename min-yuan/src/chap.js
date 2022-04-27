
function execute(url) {
    url = url.replace('m.min-yuan.com', 'www.min-yuan.com');
    let data  ="";
    let part1 = url.replace("http://www.min-yuan.com", "").replace(".html","");
    var next = part1;
    while (next.includes(part1)) {
        console.log(next)
        let response = fetch("http://www.min-yuan.com" + next +".html");
        if (response.ok) {
            let doc = response.html();
            next = doc.select(".g-content-nav a").last().attr("href").replace(".html","");
console.log(next)
            let htm = doc.select("#content").html();
            data = data + htm;
        } else {
            break;
        }
    }
    if (data) {
        return Response.success(data);
    }
    return null;
}
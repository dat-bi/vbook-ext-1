function execute(url) {
    const regex = /(?:book_id=|\/)(\d+)$/;
    let book_id = url.match(regex)[1]
    let newurl = "https://novel.snssdk.com/api/novel/book/directory/list/v1?device_platform=android&parent_enterfrom=novel_channel_search.tab.&aid=1967&platform_id=1&book_id=" + book_id
	let response = fetch(newurl, {
        headers: {
            'user-agent': UserAgent.android()
        }
    });
    if (response.ok) {
        let res_json = response.json();

        let array = res_json.data.item_list;
        // 2048 characters
        let chunkSize = 80
        let allBook = []

        for (let i = 0; i < array.length; i += chunkSize) {
            let chunk = array.slice(i, i + chunkSize).join(",");
            console.log(chunk)
            allBook.push(chunk);
        }
        return Response.success(allBook);  


    }
    return null;
}
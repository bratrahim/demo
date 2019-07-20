function fetchData(url) {
    return new Promise((resolve, reject) => {
        let xh = new XMLHttpRequest();
        xh.onreadystatechange = () => {
            if(xh.readyState == 4 && xh.status == 200)
                resolve(JSON.parse(xh.responseText));
        }
        xh.open('GET', url, true);
        xh.send(null);
    });
}

export default fetchData;
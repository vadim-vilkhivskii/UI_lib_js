import $ from '../core'

$.prototype.get = async function (url, dataTypeAmswer = 'json') {
    let res = await fetch(url);

    if (!res.ok) {
        throw new Error(`Could not fetch ${url}, status: ${res.status}`)
    }
    switch (dataTypeAmswer) {
        case 'json':
            return await res.json();

        case 'text':
            return await res.text();

        case 'text':
            return await res.blob();
    }
};

$.prototype.post = async function(url, data, dataTypeAmswer = 'text'){
    let res = await fetch(url, {
        method: "POST",
        body: data
    });

    switch (dataTypeAmswer) {
        case 'json':
            return await res.json();

        case 'text':
            return await res.text();

        case 'text':
            return await res.blob();
    }
}
import Utility from './utility.js';

export default class Network {
    constructor(canvas, algorithm) {
        this.canvas = new Canvas(canvas);
        this.algorithm = algorithm;
        this.pointers = {};
        this.operationLog = [];
    }

    static uploadCanvas(canvas, prefix) {
        var param = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify({
                prefix: prefix,
                time: Utility.getTime(),
                canvas: canvas.exportJSON(),
            })
        };
        Network.uploadRequest('./php/upload_canvas.php', param);
    }

    static downloadCanvas(prefix, username, func) {
        var param = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            }
        };
        Network.downloadRequest(`./secure/canvas/${prefix}_canvas_${username}.json`, param, func);
    }

    static uploadOperationLog(short, long, prefix) {
        var param = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify({
                prefix: prefix,
                time: Utility.getTime(),
                short: JSON.stringify(short),
                long: JSON.stringify(long),
            })
        };
        Network.uploadRequest('./php/upload_operation.php', param);
    }

    static downloadRequest(url, param, func) {
        fetch(url, param)
            .then(response => response.json())
            .then(json => {
                func(json);
            })
            .catch(error => {
                console.log(`[Request Error] ${error}`);
            });
    }

    static uploadRequest(url, param, func) {
        fetch(url, param)
            .then(response => response.json())
            .then(json => {
                if (!json.status) {
                    console.log(`[Server Error] ${json.result}`);
                }
            })
            .catch(error => {
                console.log(`[Request Error] ${error}`);
            });
    }
}

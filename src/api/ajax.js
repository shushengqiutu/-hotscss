import axios from "axios"
export default function ajax(url, data = {}, type = "GET") {
    return new Promise(function(resolve, reject) {
        let promise
        if (type === "GET") {
            let dataStr = ""
            Object.keys(data).forEach(key => {
                dataStr += key + "=" + data[key] + "&"
            })
            if (dataStr !== "") {
                dataStr = dataStr.substring(0, dataStr.lastIndexOf("&"))
                url += "?" + dataStr
            }
            console.log(url)
            promise = axios.get(url)
        } else {
            console.log(2)
            promise = axios.post(url, data)
        }
        promise.then(function(req) {

          resolve(req.data)
        }).catch(function(error) {
            reject(error.response.data)
         })


    })

}

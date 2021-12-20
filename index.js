//Main
function pretty(json){
    return JSON.stringify(json, null, 2)
}

//Exporter
module.exports = {
    pretty
}
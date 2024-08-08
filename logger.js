var url='https://mylogger.io/log';
function log(message) {
    console.log(message);
}
module.exports.log=log;
module.exports.endpoint=url;
//endpoint becomes the name of the variable outside the module
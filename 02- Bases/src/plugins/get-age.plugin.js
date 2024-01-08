const getAgePlugin = require('get-age');

const getAge = (birdhate) => {
    if (!birdhate) return new Error('birdhate is required');
    return getAgePlugin(birdhate);
}


module.exports = {
    getAge,
}
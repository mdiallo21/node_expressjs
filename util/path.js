const path = require('path');

//Capture and expose the Project root directory URI
module.exports = path.dirname(process.mainModule.filename);
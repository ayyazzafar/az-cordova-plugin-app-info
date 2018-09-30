/**
 * Cordova AppInfo Plugin
 */

var AppInfo = (function () {

    function AppInfo() {}

    AppInfo.prototype.getVersionNumber = function (successCallback) {
        cordova.exec(successCallback, function () {
            console.log('Error')
        }, 'AppInfo', 'getVersionNumber', []);
    };

    return AppInfo;

})();

var appInfo = new AppInfo();
module.exports = appInfo;
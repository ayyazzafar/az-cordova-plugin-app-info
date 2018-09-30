/**
 * Cordova AppInfo Plugin
 */

var AppInfo = (function () {

    function AppInfo() {}

    AppInfo.prototype.echo = function (echoValue, successCallback) {
        cordova.exec(successCallback, function () {
            console.log('Error')
        }, 'AppInfo', 'echo', [echoValue]);
    };

    return AppInfo;

})();

var appInfo = new AppInfo();
module.exports = appInfo;
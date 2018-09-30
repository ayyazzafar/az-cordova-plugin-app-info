package cordova.plugin;

import org.apache.cordova.*;
import org.json.JSONArray;
import org.json.JSONException;
import android.content.pm.PackageManager;
import android.content.pm.PackageManager.NameNotFoundException;

public class AppInfo extends CordovaPlugin {

    @Override
    public boolean execute(String action, JSONArray data, CallbackContext callbackContext) throws JSONException {

        if (action.equals("getVersionNumber")) {

            callbackContext.success(this.getAppVersion());
            return true;
        } else {
            return false;
        }
    }

    public String getAppVersion() {
        try {
            PackageManager packageManager = this.cordova.getActivity().getPackageManager();
            return packageManager.getPackageInfo(this.cordova.getActivity().getPackageName(), 0).versionName;

        } catch (NameNotFoundException e) {
            return "N/A";
        }

    }
}
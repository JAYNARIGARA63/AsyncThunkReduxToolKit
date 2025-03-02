// put same name in drawble
// 1) android:src="@drawable/screen"

// 2) android/gradle.properties

// android.useAndroidX=true
// android.enableJetifier=true

// In your android/app/build.gradle, add this inside dependencies {}:

// configurations.all {
//     resolutionStrategy {
//         force 'androidx.core:core:1.13.1'
//     }
// }

// MainActivity.kt

// import android.os.Bundle
// import androidx.core.os.Bundle

// MainActivity.kt

// package com.asyncthunkreduxtoolkit

// import android.os.Bundle
// import com.facebook.react.ReactActivity
// import com.facebook.react.ReactActivityDelegate
// import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
// import com.facebook.react.defaults.DefaultReactActivityDelegate

// import org.devio.rn.splashscreen.SplashScreen

// class MainActivity : ReactActivity() {

//     override fun onCreate(savedInstanceState: Bundle?) {
//         // Show splash screen
//         SplashScreen.show(this)

//         // Call super.onCreate(null) to avoid conflicting imports
//         super.onCreate(null)
//     }

//     /**
//      * Returns the name of the main component registered from JavaScript.
//      * This is used to schedule rendering of the component.
//      */
//     override fun getMainComponentName(): String = "AsyncThunkReduxToolKit"

//     /**
//      * Returns the instance of the [ReactActivityDelegate].
//      * We use [DefaultReactActivityDelegate] which allows you to enable
//      * New Architecture with a single boolean flag [fabricEnabled].
//      */
//     override fun createReactActivityDelegate(): ReactActivityDelegate =
//         DefaultReactActivityDelegate(this, mainComponentName, fabricEnabled)
// }

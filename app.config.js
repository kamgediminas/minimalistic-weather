const config = () => {
  return {
    "name": "Minimalistic Weather",
    "slug": "minimalistic-weather",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./src/assets/images/icon.png",
    "splash": {
      "image": "./src/assets/images/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#18191a"
    },
    "updates": {
      "fallbackToCacheTimeout": 0
    },
    "assetBundlePatterns": [
      "**/*"
    ],
    "ios": {
      "supportsTablet": true,
      "bundleIdentifier": "com.gediminas.minimalisticweather",
      "buildNumber": "1.0.0"
    },
    "android": {
      "package": "com.gediminas.minimalisticweather",
      "versionCode": 1,
      "adaptiveIcon": {
        "foregroundImage": "./src/assets/images/adaptive-icon.png",
        "backgroundColor": "#18191a"
      }
    },
    "web": {
      "favicon": "./src/assets/images/icon.png"
    },
    "androidStatusBar":{
      hidden: true
    }
  }
}

export default config
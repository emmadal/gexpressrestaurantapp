// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
    firebase: {
    apiKey: "AIzaSyD1iHBMskR3zuuKGLQjB9ecbBURjOShUPc",
    authDomain: "foodapp-93846.firebaseapp.com",
    databaseURL: "https://foodapp-93846.firebaseio.com",
    projectId: "foodapp-93846",
    storageBucket: "foodapp-93846.appspot.com",
    messagingSenderId: "135605586486",
    appId: "1:135605586486:web:a21275a807b2694cb8a697",
    measurementId: "G-09BGGV0JJP",
  },
  onesignal: {
    appId: "128d1749-e049-4c8f-97ca-59e99cae8f41",
    googleProjectNumber: "135605586486",
    restKey: "MGUzMzVkNmQtYzc4Ny00YzI3LTk1ZTMtMTUxNWQ2OTFmNmU3",
  },
  stripe: {
    sk: "sk_test_51HaPTFE8iA9NPA6ugoVi3U8UjCNkPifc2bofV2biL62uknERnDmNgmqLzFP4j2ZSLsOOrzknE4Dxt39doHM2K5fp00A9IlVxGY",
  },
  general: {
    symbol: 'GNF',
    code: 'GNF'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

# Fnit.Tech

![](https://user-images.githubusercontent.com/8556774/44568692-dbe47580-a7b2-11e8-9be2-c4a019918f01.png)

## How to deployment

1.  Create Firebase Config file.

create new file `src/build/config.js`. then type your api keys like:

```
export const firebaseConfig =
    apiKey: "your-api-key",
    authDomain: "your-firebase-domain",
    databaseURL: "your-firebase-db-domain",
    projectId: "your-project-id",
    storageBucket: "your storage bucket",
    messagingSenderId: "your messaging sender id"
};
```

All propaties can be copied from your Firebase project console.

2.  build.

`npm install`, `npm run build` . then you'll get `build` directory. (required node.js)

3.  Put.

move created files(`build/*`) to your server document root.

## License

MIT

## Author

TaikiFnit

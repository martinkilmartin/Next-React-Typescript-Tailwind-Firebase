# Next.js React TypeScript Tailwind Firebase Starter

```bash
yarn imagemin
```

Creates optimized [MozJPEG](https://github.com/mozilla/mozjpeg) and [WebP](https://developers.google.com/speed/webp) images.

Source directory: `/public/img/originals/*`

Destinations:

1. `/public/img/xxl/...-2400w.jpg|webp`
2. `/public/img/xl/...-1920w.jpg|webp`
3. `/public/img/lg/...-1560w.jpg|webp`
4. `/public/img/md/...-1280w.jpg|webp`
5. `/public/img/sm/...-800w.jpg|webp`
6. `/public/img/xs/...-500w.jpg|webp`
7. `/public/img/xxs/...-300w.jpg|webp`

```bash
yarn build-export
```

Creates an optimized production build. Uses [Static Site Generation](https://nextjs.org/docs/advanced-features/static-html-export) and exports an `/out/` directory for deployment as a static website.

```bash
yarn deploy
```

Deploys to firebase hosting.

```bash
yarn dev
```

```bash
yarn build
```

```bash
yarn start
```

```bash
yarn type-check
```

# Firebase best practices

Source: [Fireship - YouTube](https://www.youtube.com/watch?v=iWEgpdVSZyg)

1. Create **development** and **production** Firebase projects
2. _Enable_ Google Analytics for your Firebase **production** projects
   1. Choose analytics location appropriate to primary customer location, e.g. GDPR compliance
   2. [ ] Use the default settings for sharing Google Analytics data
      1. [ ] Google Products and Services
      2. [x] Benchmarking
      3. [ ] Technical Support
      4. [ ] Account Specialists
   3. [x] I accept the Google Analytics terms
3. Assign roles using **Policy Of Least Privilege**
   1. Roles
      1. [ ] **Owner** | **Editor** | **Viewer** : Broad access to Google Cloud project resources and services
      2. [x] Assign Firebase Role(s):
         1. **Firebase** (All Firebase products except TestLab)
            1. [ ] Admin (Edit access)
            2. [x] Viewer (Read-only access)
         2. **Analytics** (Google Analytics)
            1. [ ] Admin (Edit access)
            2. [ ] Viewer (Read-only access)
         3. **Develop** (Google Analytics, Realtime Database & Cloud Firestore, Authentication, Hosting, Storage, Functions, ML Kit)
            1. [ ] Admin (Edit access)
            2. [ ] Viewer (Read-only access)
         4. **Quality** (Google Analytics, Crashlytics, Performance Monitoring, App Distribution)
            1. [ ] Admin (Edit access)
            2. [ ] Viewer (Read-only access)
         5. **Grow** (Google Analytics, Predictions, A/B Testing, Cloud Messaging, In-App Messaging, Remote Config, Dynamic Links)
            1. [ ] Admin (Edit access)
            2. [ ] Viewer (Read-only access)
4. Add **Data Protection Officer Contact**
5. Upgrade to Firebase plan to **Blaze**
6. Set budget alerts
7. Install **Firebase Command Line Interface (CLI) Tools** https://firebase.google.com/docs/cli
8. Install **Google Cloud SDK** https://cloud.google.com/sdk/docs/install
9. Use **Firebase App Distribution** https://firebase.google.com/docs/app-distribution
10. Initiate Web project
    1. `firebase login`
    2. `firebase init`
    3. Enable Firebase CLI features:
       1. ◯ Database: Configure Firebase Realtime Database and deploy rules
       2. ◉ Firestore: Deploy rules and create indexes for Firestore
       3. ◉ Functions: Configure and deploy Cloud Functions
       4. ◉ Hosting: Configure and deploy Firebase Hosting sites
       5. ◉ Storage: Deploy Cloud Storage security rules
       6. ◉ Emulators: Set up local emulators for Firebase features
       7. ◉ Remote Config: Get, deploy, and rollback configurations for Remote Config
    4. Project Setup
       1. [ ] Use an existing project
       2. [ ] Create a new project
       3. [ ] Add Firebase to an existing Google Cloud Platform project
       4. [x] Don't set up a default project
    5. Firestore Setup
       1. firestore.rules
       2. firestore.indexes.json
    6. Functions Setup
       1. ❯ TypeScript
       2. ESLint? Y
       3. npm install? n
    7. Hosting Setup
       1. public
       2. SPA? Y
       3. GitHub? y
       4. public/index.html?/ N
    8. Emulators Setup
       1. ◉ Authentication Emulator
          1. auth emulator port (9099)
       2. ◉ Functions Emulator
          1. functions emulator port (5001)
       3. ◉ Firestore Emulator
          1. firestore emulator port (8080)
       4. ◉ Database Emulator
          1. database emulator port (9000)
       5. ◉ Hosting Emulator
          1. hosting emulator (5000)
       6. ◉ Pub/Sub Emulator
          1. pubsub emulator (8085)
       7. Emulator UI? Y
       8. Emulator UI port (any)
       9. Download the emulators now? y
11. Use deploy scripts
    1. `"emulate-dev": "firebase emulators:start --project <your-project-name>-dev"`
    2. `"emulate-prod": "firebase emulators:start --project <your-project-name>-prod"`
    3. `"preview-dev": "firebase hosting:channel:deploy preview --project <your-project-name>-dev"`
    4. `"preview-prod": "firebase hosting:channel:deploy preview --project <your-project-name>-prod"`
    5. `"serve-dev": "firebase serve --project <your-project-name>-dev"`
    6. `"serve-prod": "firebase serve --project <your-project-name>-prod"`
    7. `"deploy-dev": "firebase deploy --only hosting --project <your-project-name>-dev"`
    8. `"deploy-prod": "firebase deploy --only hosting --project <your-project-name>-prod"`
12. Default domains:
    1. `<your-project-name>.[dev|prod].web.app`
    2. `<your-project-name>.[dev|prod].firebaseapp.com`
13. Multi-Site hosting:
    | Hosting | |
    | ------------------- | --------- |
    | Storage | $0.026/GB |
    | Data transfer | $0.15/GB |
    | Custom domain & SSL | [x] |

```json
   "hosting": [
      {
         "target": "admin",
         "public": "dist"
      },
      {
         "public": "out",
         "ignore": [
            "firebase.json", "**/.*", "**/node_modules/**"
         ]
      }
   ]
```

14. URL rewrites:
1.  [SSR](https://nextjs.org/docs/basic-features/pages#server-side-rendering)
1.  [SSG](https://nextjs.org/docs/basic-features/pages#static-generation-recommended)
    ```json
       "rewrites": [
          {
             "source": "/path",
             "function": "SSR-cloud-function-name"
          },
          {
             "source": "**",
             "destination": "/index.html"
          }
       ]
    ```
1.  Dynamic Links (into Android / iOS app)

```json
"rewrites": [
   {
      "source": "app-link",
      "dynamicLinks": true
   }
]
```

16. Set HTTP Headers

```json
      "headers": [
         {
            "source": "**/*.@(eot|otf|ttf|ttc|woff|woff2|font.css)",
            "headers": [
               {
                  "key": "Access-Control-Allow-Origin",
                  "value": "*"
               }
            ]
         },
         {
            "source": "**/*.@(jpg|jpeg|gif|png|webp)",
            "headers": [
               {
                  "key": "Cache-Control",
                  "value": "max-age=2629000"
               }
            ]
         },
         {
            "source": "**/*.@(js|css|woff2)",
            "headers": [
               {
                  "key": "Cache-Control",
                  "value": "max-age=31536000"
               }
            ]
         }
      ]
```

17. CI/CD with [Google cloud build](https://cloud.google.com/build)
    | Google cloud build | |
    | ------------------------------- | --------------------- |
    | First 120 build-minutes per day | **Free** |
    | Additional build-minutes | **$0.003 per minute** |
18. Databases
    | Cloud Firestore [x] | Firebase Realtime Database |
    | -------------------- | -------------------------- |
    | $0.18 / GB stored | $5.00 / GB stored |
    | $0.18 / 100k writes | |
    | $0.06 / 100k reads | $1.00 / GB downloaded |
    | $0.02 / 100k deletes | |
19. [Backup data](https://cloud.google.com/sdk/gcloud/reference/beta/firestore/export)
    1.  Coldline
20. `$ gcloud beta firestore export gs://[BUCKET_NAME]`
21. Secure Database
22. Start in **production mode**:
    1.  Your data is private by default.
    2.  Client read/write access will only be granted as specified by your security rules.
23. Database location
24. Near clients
25. Ease GDPR compliance
26. JS import only required firebase dependencies
    1.  `import firebase from 'firebase/app'; // ES6`
    2.  `const auth = firebase.auth();`
    3.  `const db = firebase.firestore();`
    4.  `const storage = firebase.storage();`
    5.  `const perf = firebase.performance();`
    6.  `const analytics = firebase.analytics();`
27. Defer loading from script
    1.  `<script defer src="/my-firebase-app.js"></script>`
28. [FirebaseExtended](https://github.com/FirebaseExtended)
    1.  Projects that are not officially staffed by Googlers but may be of use to Firebase developers.
29. [ReactFire](https://www.npmjs.com/package/reactfire)
    1.  Hooks, Context Providers, and Components that make it easy to interact with Firebase.
30. [Performance Monitoring](https://firebase.google.com/docs/perf-mon/get-started-web)
    1.  Enables automatic performance monitoring of web apps
31. [Crashlytics](https://firebase.google.com/docs/crashlytics)
    1.  Crash reporting solution for iOS, Android, and Unity with clear & actionable insights into app issues.
32. [Analytics](https://firebase.google.com/docs/analytics)
    1.  Provides insight on app usage and user engagement.
33. User

```javascript
   // Get user for event
   async function getUser() {
      const user = await auth.currentUser;
      ...
   }

   // Listen to user
   auth.onAuthStateChanged(user => {
      ...
   });
```

30. Auth

```javascript
   try {
      const user = await auth.signInwithEmailAndPassword(email, password);
      ...
   }
   catch(err) {
      alert(err.message);
   }
```

31. Lazy Registration

```javascript
   function lazySignIn() {
      return auth.signInAnonymously();
   }
   ...
   function linkSocialAccount() {
      auth.currentUser.linkWithPopup( new firebase.auth.TwitterAuthProvider);
   }
```

32. Customize auth email templates / handlers
    1.  Email address verification / verifyEmail
    2.  Password reset / resetPassword
    3.  Email address change / ?
    4.  ? / recoverEmail
    5.  Custom SMTP settings / provider
33. User data modelling

```javascript
   /*
      1 to 1
   */
   async function oneToOne() {
      // Get a userID
      const { uid } = await auth.currentUser;
      // Use it as a Firestore DocID
      const ref = db.collection('accounts').doc(uid);
      // Write data and don't overwrite existing
      return ref.set( { dataToWrite }, { merge: true } );
   }
   /*
      1 to Many
   */
   async function oneToMany() {
      // Get a userID
      const { uid } = await auth.currentUser;
      // Use it as a Firestore DocID
      const ref = db.collection('accounts').doc(uid).collection('orders');
      // Add some data
      return ref.add( { dataToAdd } );
   }
   // Query sub-collections across users
   db.collectionGroup('orders').orderBy('date').where(...);
   /*
      Many to Many
   */
   async function manyToMany() {
      // Get a userID
      const { uid, displayName } = await auth.currentUser;
      const ref = db.collection('chats');
      const member = {
         [uid]: displayName
      }
      ref.set( { members }, { merge: true });
   }
   const query = db.collection('chats').orderBy('members.jazzy-jeff');
```

34. Single v Realtime querying

```javascript
// Single query $
query.get()
// Realtime query $$$
query.onSnapshot((q) =>
  q.docChanges().map((change) => change[doc | newIndex | oldIndex | type])
)
```

35. Enable offline persistence

```javascript
db.enablePersistence({ synchronizeTabs: true })
```

36. Wildcard string query

```javascript
const start = 'The Fast and The Furious'
const end = start + '~'
movies.orderBy('title').startAt(start).endAt(end)
```

37. Use server timestamp

```javascript
const { serverTimestamp } = firebase.firestore.FieldValue
ref.update({ timestamp: serverTimestamp() })
```

38. Increment value

```javascript
const { increment } = firebase.firestore.FieldValue
ref.update({ counter: increment(1 | -1) })
```

39. Atomic batch writes

```javascript
const batch = db.batch()
batch.set(game, { score })
batch.set(user, { lifetimeScore })
batch.commit()
```

40. [Security rules](https://firebase.google.com/docs/firestore/security/rules-conditions)

```javascript
   service cloud.firestore {
      match /database/{database}/documents {
         match /{document=**} {
            allow read, write: if false;
         }
         // Allow the user to access documents in the "cities" collection
         // only if they are authenticated.
         match /cities/{city} {
            allow read, write: if request.auth != null;
         }
         // Make sure the uid of the requesting user matches name of the user
         // document. The wildcard expression {userId} makes the userId variable
         // available in rules.
         match /users/{userId} {
            allow read, update, delete: if request.auth != null && request.auth.uid == userId;
            allow create: if request.auth != null;
         }
         // Allow the user to read data if the document has the 'visibility'
         // field set to 'public'
         match /cities/{city} {
            allow read: if resource.data.visibility == 'public';
         }
         // Make sure all cities have a positive population and
         // the name is not changed
         match /cities/{city} {
            allow update: if request.resource.data.population > 0
                        && request.resource.data.name == resource.data.name;
         }
         match /cities/{city} {
            // Make sure a 'users' document exists for the requesting user before
            // allowing any writes to the 'cities' collection
            allow create: if request.auth != null && exists(/databases/$(database)/documents/users/$(request.auth.uid))

            // Allow the user to delete cities if their user document has the
            // 'admin' field set to 'true'
            allow delete: if request.auth != null && get(/databases/$(database)/documents/users/$(request.auth.uid)).data.admin == true
         }
         // Custom functions
         // True if the user is signed in or the requested data is 'public'
         function signedInOrPublic() {
            return request.auth.uid != null || resource.data.visibility == 'public';
         }
         match /cities/{city} {
            allow read, write: if signedInOrPublic();
         }
         match /users/{user} {
            allow read, write: if signedInOrPublic();
         }
         // Various
         function isAdmin() {
            return get(/databases/$(database)/documents/users/$(request.auth.uid)).data.admin;
         }
         match /myDoc/{myDocId} {
            allow get: if [resource.[data|__name__|id]]|[request.[auth|path|resource|time|method]];
            allow list: if request.auth != null && exists(/databases/$(database)/documents/users/$(request.auth.uid))
            allow create: if request.auth != null && get(/databases/$(database)/documents/users/$(request.auth.uid)).data.admin == true
            allow update: if request.auth != null && if isAdmin()
            allow delete: if request.auth != null && if isAdmin()
         }
      }
   }
```

41. File Storage
    ...

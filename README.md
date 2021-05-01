# Next.js React TypeScript Tailwind Firebase Starter

`yarn imagemin`

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

`yarn build-export`

Creates an optimized production build. Uses [Static Site Generation](https://nextjs.org/docs/advanced-features/static-html-export) and exports an `/out/` directory for deployment as a static website.

`yarn deploy`

Deploys to firebase hosting.

`yarn dev`

`yarn build`

`yarn start`

`yarn type-check`

# [Firebase best practices](https://www.youtube.com/watch?v=iWEgpdVSZyg)

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

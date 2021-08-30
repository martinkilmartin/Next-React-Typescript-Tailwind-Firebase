# Next.js React TypeScript Tailwind Firebase Starter

```bash
yarn imagemin
```

Creates optimized [MozJPEG](https://github.com/mozilla/mozjpeg) and [WebP](https://developers.google.com/speed/webp) images from .jpg located under a source directory.

Source directory: `/public/img/originals/*.jpg`

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

Next.js development build with development sever

```bash
yarn build
```

Next.js production build

```bash
yarn start
```

Next.js production server

```bash
yarn type-check
```

Run a compile on TypeScript files as defined by tsconfig.json

```bash
yarn prettier-check

yarn prettier-fix
```

[Opinionated code formatting](https://prettier.io/)

```bash
yarn prepare
```

Modern native git hooks via [Husky](https://typicode.github.io/husky/#/)

## Example Next.js app with route loading
Sometimes when switching between pages, Next.js needs to download pages from the server before rendering the page. This will happened on SSR projects specially, And it may also need to wait for the data. So while doing these tasks, the browser might be non responsive.

We can simply fix this issue by showing a loading indicator.

![](https://github.com/hamitmohamadi/next-app-with-route-loading/blob/main/public/gif.gif)

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


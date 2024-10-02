import { defineMiddleware } from "astro:middleware";

// `context` and `next` are automatically typed
export const onRequest = defineMiddleware((_, next) => {
  console.log("Middleware Request received");
  next();
});

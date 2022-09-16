import { createRouter } from "./context";
import superjson from "superjson";
import { contactRouter } from "./contact";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("contactRouter.", contactRouter);

// export type definition of API
export type AppRouter = typeof appRouter;

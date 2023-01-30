import { App } from "./cores";

App.app.listen(App.port, () => {
  console.log(`[⚡server] running at http://localhost:${App.port}`);
});

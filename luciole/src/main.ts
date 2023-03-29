import { createApp } from 'vue'
import { createPinia } from 'pinia'
import * as Sentry from "@sentry/vue";
import { BrowserTracing } from "@sentry/tracing";

import App from './App.vue'
import router from './router'

const app = createApp(App)

Sentry.init({
    app,
    dsn: "https://0f98a6823c6c4bf381499f27a14279a3@o4504758412050432.ingest.sentry.io/4504921006014464",
    integrations: [
      new BrowserTracing({
        routingInstrumentation: Sentry.vueRouterInstrumentation(router),
        tracePropagationTargets: ["localhost:8000", "my-site-url.com", "localhost", /^\//],
      }),
    ],
    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
  });

app.use(createPinia())
app.use(router)

app.mount('#app')

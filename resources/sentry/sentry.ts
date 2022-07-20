import { boot } from "quasar/wrappers";
import { BrowserTracing } from "@sentry/tracing";
import * as Sentry from "@sentry/vue";

export default boot(({ app, router }) => {
  Sentry.init({
    app,
    dsn: "<Insert dsn here>",
    logErrors: true,
    integrations: [
      new BrowserTracing({
        routingInstrumentation: Sentry.vueRouterInstrumentation(router),
        tracingOrigins: ["localhost", "my-site-url.com", /^\//],
      }),
    ],
    // Add this to add user feedback
    beforeSend(event) {
      if (event.exception) {
        Sentry.showReportDialog({ eventId: event.event_id });
      }
      return event;
    },
    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
  });
});

How to add sentry to a Quasar project:
- run "yarn add @sentry/vue @sentry/tracing"
- put sentry.ts into the boot file
- in the quasar.config.js under boot add "sentry"

To test Sentry in your project:
- add a button element to MainLayout.vue:
	<button @click-"throw new Error('Sentry Test')">Throw error</button>
- run "quasar dev"
- in your browser open devtools' console
- click the Throw error button
- if there is a Cross Origin error, please turn off your ad-blocker
- if there is a Vue error: "Sentry Test" go to https://sentry.io
- under Issues on the correct project, there is supposed to be an "Error" entry,
Then you now you connected Sentry correctly!!! Hooray!

Installing Sentry's webpack plugin(if you get errors reading code in Issues page):
- run "yarn add @sentry/webpack-plugin"
- put webpack.sentry.js to root of project
- get a SENTRY_AUTH_TOKEN and add to .env from Sentry->Settings->Account->API->Auth Tokens 
- done!

Configue Alerts for Sentry:
- go to Sentry->Alerts->Create Alert
- choose your conditions and save rule

How to add a Discord bot:
- create Discord webhook: https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks
- https://sentrydiscord.dev/create


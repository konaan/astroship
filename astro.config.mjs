import react from "@astrojs/react";
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

export default defineConfig({
	integrations: [react(), tailwind()],
	i18n: {
		defaultLocale: "pt-br",
		locales: ["pt-br", "en"],
	},
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import reactRefresh from "@vitejs/plugin-react-refresh";
import dotenv from "dotenv";
// require("dotenv").config({ path: "./.env" });

dotenv.config();
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	test: {
		globals: true,
		environment: "happy-dom",
		setupFiles: ["src/setupTest.ts"],
	},
});

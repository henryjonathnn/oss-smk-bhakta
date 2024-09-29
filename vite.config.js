import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import imagemin from 'vite-plugin-imagemin'
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [
        react(), // React plugin that we installed for vite.js
        laravel({
            input: ["resources/css/app.css", "resources/js/app.jsx"],
            refresh: true,
        }),
        imagemin({
            gifsicle: { optimizationLevel: 7, interlaced: false },
            optipng: { optimizationLevel: 7 },
            mozjpeg: { quality: 80 },
            pngquant: { quality: [0.8, 0.9], speed: 4 },
            svgo: {
                plugins: [
                    { name: "removeViewBox" },
                    { name: "removeEmptyAttrs", active: false },
                ],
            },
        }),
    ],
});

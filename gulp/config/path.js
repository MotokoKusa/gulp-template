// Получаем имя папки проекта
import * as nodePath from 'path';

const rootFolder   = nodePath.basename(nodePath.resolve()),
      buildFolder  = `./dist`,
      srcFolder    = `./src`;

export const path = {
        build: {
            js: `${buildFolder}/js/`,
            css: `${buildFolder}/css/`,
            html: `${buildFolder}/`,
            images: `${buildFolder}/img/`,
            fonts: `${buildFolder}/fonts/`,
            files: `${buildFolder}/files/`,
        },
        src: {
            js: `${srcFolder}/js/app.js`,
            images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
            svg: `${srcFolder}/img/**/*.svg`,
            scss: `${srcFolder}/scss/style.scss`,
            html: `${srcFolder}/*.mjml`,
            files: `${srcFolder}/files/**/*.*`,
        },
        watch: {
            js: `${srcFolder}/js/**/*.js`,
            scss: `${srcFolder}/scss/**/*.scss`,
            html: `${srcFolder}/**/*.mjml`,
            files: `${srcFolder}/files/**/*.*`,
            images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp,ico,svg}`,

        },
        clean: buildFolder,
        buildFolder: buildFolder,
        srcFolder: srcFolder,
        rootFolder: rootFolder,
        ftp: ``,
    };


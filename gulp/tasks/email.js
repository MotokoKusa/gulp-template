import mjml from "gulp-mjml"
import mjmlEngine from "mjml"
import fileInclude from "gulp-file-include";
import webpHtmlNosvg from "gulp-webp-html-nosvg";
import versionNumber from "gulp-version-number";

export const email = () => {
    return app.gulp.src(app.path.src.email)


        .pipe(
            app.plugins.if(
                app.isBuild,
                webpHtmlNosvg()
            )
        )
        .pipe(app.gulp.dest(app.path.build.email))
        .pipe(app.plugins.browsersync.stream());
}

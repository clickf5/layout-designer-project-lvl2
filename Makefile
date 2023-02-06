sass:
	sass ./src/scss/app.scss ./src/css/app.css
	npx stylelint --fix ./src/css/app.css

lint:
	npx stylelint --fix ./src/scss/*.scss
	npx htmlhint ./src/*.html
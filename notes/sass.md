# SASS
Syntactically Awesome Style Sheets

### Setup:

1. Make sure you have [Ruby Gems](https://rubygems.org/) installed. You can check if you do by typing `gem -v` into your command line. If a version number comes up you have have Ruby Gems installed.
* Make sure you have SASS installed by entering `sudo gem install sass` into your command line. You can check if you do by typing `sass -v`. If a version number comes up you have SASS installed.

### Up & Running:

1. Create a .sass file.
* Link your html file(s) to that file but with a .css extension (i.e. If your SASS file is 'styles.sass' link your html file to 'styles.css'). The next command will create the 'styles.css' file for you.
* In your command line enter `sass --watch input.sass:output.css`. (i.e. If your SASS file is 'styles.sass' and you want it to create a 'styles.css' file enter `sass --watch styles.sass:styles.css`) SASS will automatically update your css file for you.

# 2016.code4lib.org

[![Gitter](https://badges.gitter.im/Join Chat.svg)](https://gitter.im/C4L-PHL?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

## Intro

This site was developed by the [Code4Lib 2016 Conference Committee Website Working Group](http://wiki.code4lib.org/2016_Conference_Committees#Website_Working_Group). The site was designed to provide a comprehensive overview 
of the Code4Lib 2016 Annual Conference. A great deal of conference and organizational info can be found on the [Code4Lib Wiki](http://wiki.code4lib.org/Main_Page) and the [Code4Lib Site](http://code4lib.org), but this site should serve as a gateway to the various sources of Code4Lib information while providing visitors with a user-friendly way to find conference-specific info.

This site was designed with future users in mind, so the group chose platforms that would be accessible to a wide range of users: [Jekyll](http://jekyllrb.com) and [GitHub Pages](https://pages.github.com).  We also custom build  Bootstrap 3.3.4 from less files for basic site colors and fonts.

## About Jekyll

[Jekyll](http://jekyllrb.com) is a Rails gem that generates static websites from markdown, HTML, and other formats. See the [official Jekyll documentation](http://jekyllrb.com/docs/home/) for details. 


## Contributing

Steps for contributing have been documented in the [wiki on the site's GitHub page](https://github.com/code4lib/2016.code4lib.org/wiki) and will be updated as needed. 

### Here's how to get started and contribute:

1. cd to repo root and ```git pull```
2. ```bundle install```
3. ```bundle exec jekyll serve```
4. check localhost:4000
5. make sure that your ```_data/path.yml``` file's content is simply ```'/'```
5. git checkout -b issue-3
6. make changes
7. check [http://localhost:4000](http://localhost:4000) to see your changes
8. ```git add {changed-files}```
9. ```git commit -m "fixes issue #3"```
10. add your branch to the remote ```git push --set-upstream origin issue#24```
11. ```git checkout master```
12. go to https://github.com/code4lib/2016.code4lib.org
13. make a pull request base:master and compare:issue-3
14. wait for someone to test your changes and merge
15. do the dance of joy

### To update the public site with any new changes:
1. make a pull request base:gh-pages and compare:master 
2. Master should be up to date; you can merge your own pull request here.

### Making changes to site CSS
Most of the base colors and fonts are set in Bootstrap 3.3.4's ```variables.less``` file located in ```prototype/bootstrap/less/```.  More info on compiling Bootstrap CSS with Grunt can be found on their [Getting Started page](http://getbootstrap.com/getting-started/#grunt).  Other styles can be found in the ```css/main.css``` directory.

## Managing the Site

## Resources
More details are available in the [GitHub wiki for this page](https://github.com/code4lib/2016.code4lib.org/wiki)

[Conference Website Working Group wiki page: Working Group Documents](http://wiki.code4lib.org/Website_Working_Group_Documents)


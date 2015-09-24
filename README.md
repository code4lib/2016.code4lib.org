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

See a list of [outstanding issues](https://github.com/code4lib/2016.code4lib.org/issues). The following example uses "issue#3" as a subject. That's the branch name and used in the commit message.

### Here's how to get started and contribute:

#### The first time you want to contribute
1. cd to repo root and ```git pull```
2. ```bundle install```
3. Continue with step 3 below

#### Subsequent work
1. Make sure you're on the master branch (necessary if you skipped step 9)
  * ```git checkout master```
2. Make sure your master branch is up to date
  * ```git pull origin master```
3. Start up jekyll
  * ```bundle exec jekyll serve```
  * check [http://localhost:4000](http://localhost:4000)
  * make sure that your ```_data/path.yml``` file's content is simply ```'/'```
4. create a new branch for your changes
  * ```git checkout -b issue#3```
5. make changes, check [http://localhost:4000](http://localhost:4000) to see your changes
6. add your changed files
  * ```git add {changed-files}```
7. commit your changes with a fancy message
  * ```git commit -m "fixes issue #3"```
8. add your branch to the repo
  * ```git push --set-upstream origin issue#3```
9. switch back to the master branch
  * ```git checkout master```

10. go to https://github.com/code4lib/2016.code4lib.org
11. make a pull request base:master and compare:issue-3
12. wait for someone to test your changes and merge
13. do the dance of joy

### Making changes to site CSS
Most of the base colors and fonts are set in Bootstrap 3.3.4's ```variables.less``` file located in ```prototype/bootstrap/less/```.  More info on compiling Bootstrap CSS with Grunt can be found on their [Getting Started page](http://getbootstrap.com/getting-started/#grunt).  Other styles can be found in the ```css/main.css``` directory.

## Managing the Site

#### Checking pull requests
1. Follow steps 1-3 from Subsequent work
2. Get any remote branches
  * ```git fetch```
3. Switch to the branch in question
  * ```git checkout BRANCHNAME```
4. Check [http://localhost:4000](http://localhost:4000) that nothings broken
5. Merge that branch and master

#### Keeping master and gh-pages in sync
[Original source](http://lea.verou.me/2011/10/easily-keep-gh-pages-in-sync-with-master/)

When master is ready to get published:
```
git add . //add any outstanding files
git status // to see what changes are going to be commited
git commit -m 'Some descriptive commit message'
git push origin master // syncs local and origin master
git checkout gh-pages // go to the gh-pages branch
git rebase master // bring gh-pages up to date with master
git push origin gh-pages // commit the changes
git checkout master // return to the master branch
```
Additionally, this can be done in the GUI
1. make a pull request base:gh-pages and compare:master
2. Master should be up to date; you can merge your own pull request here.

## Resources
More details are available in the [GitHub wiki for this page](https://github.com/code4lib/2016.code4lib.org/wiki)

[Conference Website Working Group wiki page: Working Group Documents](http://wiki.code4lib.org/Website_Working_Group_Documents)


---
topic: "github pages"
desc: "Publishing static content online with github pages"
---

Github offers a simple way to publish websites called "github pages".  

There are some limitations of github pages, but for simple pages involving only basic HTML, or HTML/CSS/JavaScript, it is an easy way to get started and get your content on the web.

Here are the basic instructions for getting a simple web page online with github pages.   After this overview, there is more detail about each step.

1.  Create a (free) github.com account.
2.  Create a repository.  
   * You only need to give it a name, and click the button for "Initialize this repository with a README".   
   * For everything else, the defaults are fine (public, "Add .gitignore: None", and "Add a license: None").
   * Choose the name carefully, since the url for your website will be of the form `username.github.io/repo-name`. 
3.  Create a branch called `gh-pages`.
4.  Change the default branch to `gh-pages`
5.  Create or upload your content:
   * Create an index.html file to be the home page for the site.
   * HTML, CSS and JavaScript files are supported.  
   * Server side code (e.g. PHP, Python, Perl, Ruby) is not.
6.  View your webpage at username.github.io/repo-name

# Create a free github.com account

Visit <http://github.com> and create an account on the free plan.

Choose your username wisely, since it will be part of your professional identity as a coder.  Potential employers often look at your github.com repos to see examples of your coding work.  You may find it better to choose something like `jklopez4` rather than `coolskaaterkid23` or `iceskreemfan`.  

# Create a repository

To create a repository, you need to be logged in to your account at the
page <http://github.com>.  Go to the upper right hand corner of the page,
and click the + sign, to bring down the "create" menu, as shown below.  Select "New&nbsp;repository".

![create menu](create_menu.png)

Once you select New repository, you should see a screen like this one:

![new repo](new_repo_50pct.png)

Fill in the name:

![fill in name](fill_in_name.png)

Click the box that says "Initialize this repository with a README":

![init with README](init_with_README.png)

And then click the Create repository button:

![click create repo](click_create_repo.png)

# Create a branch called gh-pages

Github repositories store a history of all changes to a set of files.  They also allow you to keep multiple "versions" of the entire set of files called "branches".

Normally, when getting started with github, we only have one branch called the `master` branch.  But github pages always works from a special branch called `gh-pages`.  Everything on the `gh-pages` branch is what gets published to the web&mdash;and <em>only</em> what is on the `gh-pages` branch gets published to the web.

To create the gh-pages branch, find the part of the page that indicates the current branch.  It is the box that has "Branch: <b>master</b>&nbsp;<span>&#9662;</span>", as shown in the picture below.

![branch](branch.png)

Click the triangle to open the box where you can type in the name of a new branch.  It will then look like this:

![branch_after_click](branch_after_click.png)


Then, enter the branch name `gh-pages` so that it looks like this:

![branch_enter_gh_pages](branch_enter_gh_pages.png)

Then press enter, and the new branch is created.






# TODO: FINISH THIS PAGE BY FILLING IN DETAIL FOR THESE STEPS

4.  Change the default branch to `gh-pages`
5.  Create or upload your content:
   * Create an index.html file to be the home page for the site.
   * HTML, CSS and JavaScript files are supported.  
   * Server side code (e.g. PHP, Python, Perl, Ruby) is not.
6.  View your webpage at username.github.io/repo-name


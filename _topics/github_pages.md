---
topic: "github pages"
desc: "Publishing static content online with github pages"
prereqs:
   - "html"
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

# Change the default branch to `gh-pages`

Normally, the default branch in github is the `master` branch.   That makes sense most of the time, but for working with github pages to host a web page, it makes more sense to make `gh-pages` be the default branch.

(Note: if you are confused about what this means at this
point&mdash;i.e. what a "branch" is and what the "default branch" is,
etc.&mdash;don't worry too much about it.  It will make more sense
later on as you have more experience working with github.  Just follow
the instructions in this section.)

To make `gh-pages` be the default branch, you want to go to the Settings menu
for the repo you created.

* Note that github has a Settings menu for your account, as well as a Settings menu for each repo you create.
* To get to the proper Settings menu, follow the instructions below.

Naviate to the main page for your repo.  It will have a URL of the form `http://github.com/`<em>your-user-name</em>`/`<em>your-repo-name</em>

On that page, you should see a link to a menu for Settings as shown here. Click on that link.  

![repo_settings_menu.png](repo_settings_menu_50pct.png)

That will take you to a page with a URL of the form `http://github.com/`<em>your-user-name</em>`/`<em>your-repo-name</em>`/settings`  That page should look like the one below, where you will click on the Branches option as shown here:

![repo_settings_branches.png](repo_settings_branches_50pct.png)

Now, as shown in Step (1) below, find the menu for selecting the default branch&mdash;for a brand new repo, it will look like this:  <b>master</b>&nbsp;<span>&#9662;</span>.  Click on that, and then as shown in Step 2 below, click gh-pages.

![select-default-branch-gh-pages](select-default-branch-gh-pages.png)

That should change the picture so that it looks like the one below.   Then, as shown in Step (3) below, click the Update button:

![click-update-button.png](click-update-button.png)

You will now see the following warning.   It comes up because changing the default branch of a github repo to something other than master is an unusual thing to do.  But for the case of a repo that is being used to publish a simple web page using github pages, it's perfectly fine.  So click the button to confirm our choice, as shown in Step&nbsp;4 below.

![click-to-confirm](click_to_confirm.png)


Finally, Step 5 as shown in the diagram below is to see that it worked from the message "Default branch changed to gh-pages" that shows up at the top of the screen, and the fact that the Update button is now greyed out.  To return to the main page for your repo so that you can start creating a web page, click on the name of the repo (as shown in the diagram below as Step 6.)

![changing-default-branch-worked.png](changing-default-branch-worked.png)


# Create or upload your content

Now go back to the main page of the repo.   It will have a URL of the form `http://github.com/`<em>your-user-name</em>`/`<em>your-repo-name</em>

You can create an `index.html` file right in the browser by clicking the "Create new file" button as shown here:

![Create new file button](create-new-file-button-50pct.png)

After clicking this button, you'll see that you can enter text for a new file. Give the file the name `index.html`, and type in some HTML code for a simple web page.   You can find some on the topic page <span data-topic="html" data-desc="none"></span>.

Here's an image of what that would look like:

![fill in filename and HTML code](fill-in-filename-and-HTML-code.png)

After entering the name `index.html` and some HTML content, to save the file, you'll need to scroll down to find the Commit button.   Saving a file in github involves "committing" it to the repository.   The commit button is the green one in this image:

![commit button](commit_button.png)


# Viewing your webpage at username.github.io/repo-name

As long as you have:

* a username (e.g. jklopez)
* a repo name (e.g. mypage)
* an index.html file in the top directory level of your repo on the gh-pages branch

then you should be able to see the webpage at, for example, http://jklopez.github.io/mypage

If you add additional files, they would be found at similar URLs:

* `foo.html` would be at http://jklopez.github.io/mypage/foo.html
* `bar.html` would be at http://jklopez.github.io/mypage/bar.html
* If you create a folder baz, and put index.html into it, then that content will appear at http://jklopez.github.io/mypage/baz

# Next steps: CSS and JavaScript files

The next steps would be to add CSS and JavaScript files to your site.   That will be covered in additional topics pages.

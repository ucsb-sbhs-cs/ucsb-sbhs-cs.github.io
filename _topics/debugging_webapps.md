---
topic: "Debugging: Webapps"
desc: "Things to try when you are stuck"
---

There are many general debugging techniques; this page is devoted to a few that are specific to web applications.

Try these when you are stuck.

# Is it a caching problem?

Are you making a change to code (HTML/CSS/JS/Python) but not seeing the effect in your browser?

It could be caching.  Try:

* Opening an "incognito" or "private browsing" window and trying the web request again
* Do a [hard refresh](https://www.getfilecloud.com/blog/2015/03/tech-tip-how-to-do-hard-refresh-in-browsers/) which could be CTRL-Reload, CTRL-F5, Shift-Reload, or &#8984;-Shift-R, depending on your OS, Browser, etc.  Learn what works on your particular system.

# Use `console.log()` statements in JavaScript

In JavaScript, you can use `console.log("variable_name" + variable_name)` to write out values of variables to the console.  The console
can be accessed from the "Developer Tools" part of your web browser.  Various browser have different shortcuts to get there (see the shortcuts for [Chrome](https://developers.google.com/web/tools/chrome-devtools/shortcuts), [Firefox](https://developer.mozilla.org/en-US/docs/Tools/Debugger/Keyboard_shortcuts)
[Safari](https://developer.apple.com/library/content/documentation/AppleApplications/Conceptual/Safari_Developer_Guide/KeyboardShortcuts/KeyboardShortcuts.html), and [IE](https://msdn.microsoft.com/en-us/library/dd565630.aspx)



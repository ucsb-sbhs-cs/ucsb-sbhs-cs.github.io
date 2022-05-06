---
topic: "OAuth: Github Credentials"
desc: "Creating the GITHUB_CLIENT_ID and GITHUB_CLIENT_SECRET values"
indent: true
---

To create the values for `GITHUB_CLIENT_ID` and `GITHUB_CLIENT_SECRET`:

1. Login to github.com
2. Select the menu at upper right under your personal icon/avatar to access
   your personal Settings page.
3. On that settings page, scroll down until you see "Developer Settings"
   in the left hand column.   One of those settings is "OAuth applications".
   Select that.
4. On that page, there is a button to "Register a new application". Click it.
5. You are now asked for these values:

   | Value | Explanation | Example of what to fill in |
   |-------|-------------|----------------------------|
   | Application name | This is what the user will see when they are being given a choice as to whether to authorize your application to access their github account | `Chris' OAuth Test` |
   | Homepage URL | The https URL for the root page of your application | Either `https://salty-sea-12345.herokuapp.com` or <br> `http://127.0.0.1:5000` |
   | Application Description | Anything else you want the user to see when logging into your app for the very first time | This is a test of OAuth for my programming class|
   | Authorization callback URL | The URL for the route that processes the OAuth callback.  Typically https, and typically is the root URL followed by `/login/authorized` | Either `https://salty-sea-12345.herokuapp.com/login/authorized` or <br> `http://127.0.0.1:5000/login/authorized` |

   Note: A key problem that folks run into with OAuth is the http vs https
   problem.   If you are using Flask, be sure that your code for the
   `/login` route looks like this (note the `_scheme='https'`).  

   ```python
   @app.route('/login')
      def login():
         return github.authorize(callback=url_for('authorized',
	                         _external=True, _scheme='https'))

   ```
   However, if you are running locally, the scheme should be `http` (no 's'), and you should also add the following line of code to you Python code.  DELETE IT before deploying to Heroku.  Otherwise your app will be insecure.
   ```python
   os.environ['OAUTHLIB_INSECURE_TRANSPORT'] = '1' #Remove once done running locally
   ```
   
   Also, if you changed the line of code that looks like this, so that the
   route is something other than `/login/authorized`, you'll have to
   change the value in the URL to match.

   ```python
   @app.route('/login/authorized')
   ```

6. Click Register Application.   You should now have values for the
   Client Id and the Client Secret.   These are the values you'll use for
   `GITHUB_CLIENT_ID` and `GITHUB_CLIENT_SECRET`


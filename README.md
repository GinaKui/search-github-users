# Search Github User
------
Single page app built by create-react-app.  
search and display github users within the UI.  
deployed by Netlify at https://search-github-developerkui.netlify.com/  
consume github api, [document](https://developer.github.com/v3/users/)  

## Local setup
The app is making request using the formate `https://api.github.com/users/whatever?client_id=xxxx&client_secret=yyyy`. Therefore to serve at the local machine, the following enviroment variables will be needed
```bash
GITHUB_CLIENT_ID=          # for production
GITHUB_CLIENT_SECRET=      # for production
REACT_APP_GITHUB_CLIENT_ID=        # other
REACT_APP_GITHUB_CLIENT_SECRET=    # other
```

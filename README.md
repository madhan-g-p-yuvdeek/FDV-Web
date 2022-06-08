This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Debug Jest test cases

### `In Visual Studio Code`

1.- Create a launch.json file to hold the debug configuration:

* Click on the _Run and Debug_ icon (left hand sidebar in the VS code interface).

* Click on the _create a launch.json file_ link or the _Add Configuration..._ option in the dropdown list.

* Select _Node.js_ (Jest runs under node).

* A brand new launch.json file filled out with a default configuration is created under the .vscode folder.

2.- In launch.json add the following configuration or replace the default configuration with:

        {
        "version": "0.2.0",
        "configurations": [
            {
            "name": "Debug Jest tests",
            "type": "node",
            "request": "launch",
            "runtimeExecutable": "${workspaceRoot}/node_modules/.bin/react-scripts",
            "args": ["test", "--runInBand", "--no-cache", "--watchAll"],
            "cwd": "${workspaceRoot}",
            "protocol": "inspector",
            "console": "integratedTerminal",
            "internalConsoleOptions": "neverOpen"
            }
        ]
        }

   name: friendly name for this configuration

   runInBand: run all tests serially in the current process, rather than creating a worker pool of child processes that run tests. For easier debugging.

   no-cache: Disable the cache, Jest caches transformed module files to speed up test execution (in some scenarios this can lead to issues when debugging).

   watchAll: Watch files for changes and rerun all tests when there is an update on any of the files.

3.- Debugging

* Place breakpoints in your code.
* Click on the _Run and Debug_ icon (left hand sidebar in the VS code interface).
* Select the newly created "Debug Jest tests" from the options.
* Click on the play icon.


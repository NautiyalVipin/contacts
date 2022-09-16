# My Contact List App - ReactJS 🚀

![alt text](/src/images/contactList.jpg)


## ⭐ Introduction 

This is a Contact list App. Tools used are React, Tailwind and Javascript. It is a responsive web application. CRUD operations can be performed on contacts. State is managed using react useReducer hook and Context API.


 Folder and Components Structure
                            
            
    
            ├── Components     
            │   ├── AddContact.jsx
            │   ├── Card.jsx
            │   ├── CardDetail.jsx
            │   ├── ContactDetails.jsx
            │   └── EditContact.jsx
            ├── images
            │   ├── contactList.jpg
            │   ├── deleteContact.jpg
            │   ├── editContact.jpg
            │   ├── newContact.jpg
            │   └── showcontact.jpg
            ├── Reducer
            │   └── Reducer.jsx
            ├── App.jsx    
            ├── index.css
            └── index.js
    
            

                             App--------Reducer
                 _____________|___________
                |                         |           
            AddContact                   Card
                |                         |
           ContactDetails            CardDetail
                                          |
                                     EditContact
                                          |
                                    ContactDetails     
             
                   
𝐔𝐬𝐞𝐫 𝐒𝐭𝐨𝐫𝐢𝐞𝐬

- Users should be able to view and edit contact List

- Users should be able to add new contact or delete a  contact. 


𝐅𝐞𝐚𝐭𝐮𝐫𝐞𝐬

- Fetch and show users from the api - https://jsonplaceholder.typicode.com/users
- Add a contact, make a POST call to the above url (from where you are fetching) and save the contact in react state. (This will be a dummy request, you won’t be able to add contacts to the server. But the request is valid and will send you some data. Read the guide).
- Update a contact, make a PUT call to the above url. (Again this is a dummy call).
- Delete a contact, make a DELETE call to the above url. (Again this is a dummy call).

<br/>
<br/>

### 🛠️ Tools Used

<p align="justify">
<img height="140" width="140" src="https://ik.imagekit.io/garbagevalue/garbage/tags/ReactJS_ne_91IZ6n.webp">
<img height="140" width="140" src="https://user-images.githubusercontent.com/76626529/135654695-ca008e4f-99c8-40fc-9b73-8573f03c2867.png">
<img height="140" width="140" src="https://www.w3.org/html/logo/downloads/HTML5_Logo_256.png">
<img height="140" width="140" src="https://logodix.com/logo/470309.png">
<img height="140" width="140" src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png">
<img height="140" width="140" src="https://code.visualstudio.com/assets/apple-touch-icon.png">
<img height="140" width="140" src="https://bourhaouta.gallerycdn.vsassets.io/extensions/bourhaouta/tailwindshades/0.0.5/1592520164095/Microsoft.VisualStudio.Services.Icons.Default">
</p>


<br/>
<br/>


-  Packages:
   -  react
   -  react-dom
   -  react-click-away-listener
   -  react-scripts
   -  react-spinners
   -  react-toastify
   -  autoprefixer
   -  postcss
   -  tailwindcss
   
-  Library: ReactJS
-  Programming / Scripting: JavaScript
-  Front-End: HTML, CSS
-  Runtime Environment: NodeJS
-  Integrated Development Environment: VSCode

<br/>
<br/>

## 💻 Screens

![alt text](/src/images/showContact.jpg)
![alt text](/src/images/editContact.jpg)
![alt text](/src/images/deleteContact.jpg)
![alt text](/src/images/newContact.jpg)


<br/>

I hope you like the project. Thank you for your time 😄

<br/>


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

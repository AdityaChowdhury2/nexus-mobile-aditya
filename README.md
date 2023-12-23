Follow these steps to set up and run the project locally:

1. **Clone the Repository:**

   ```
   git clone <repository-url>
   ```

2. **Navigate to the Project Directory: Client Side**

   ```
   cd nexus-mobile
   ```

3. **Open Command Prompt & Install Dependencies:**

   ```
   npm install
   ```

4. **Run the Server**
   ```
   npm run dev
   ```
   ⚠ 🚧please add your own firebase projects auth details as below format in .env.local file🚧⚠

**.env.local**

```
VITE_APIKEY= "addyourownapikey"
VITE_AUTHDOMAIN= "addyourownauthdomain"
VITE_PROJECTID= "addyourownprojectid"
VITE_STORAGEBUCKET= "addyourownstoragebucket"
VITE_MESSAGINGSENDERID= "addyourownmessaginsenderid"
VITE_APPID= "addyourownappid"
VITE_SERVER_URL= https://nexus-mobile-server.vercel.app
```

Open your browser and visit http://localhost:5173 to view the app.

[Live Link](https://nexus-mobile-aditya.web.app)

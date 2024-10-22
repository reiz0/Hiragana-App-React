# Hiragana App

This app helps users learn the pronunciation of Japanese characters through quizzes. It offers a game-like experience, making it fun and engaging to memorize how to pronounce hiragana characters.



## Major functions

- Level Selection: Users can choose from different difficulty levels.
-	Scoring: Each quiz shows how many points the user has earned.
-	Multiple Choice Questions: Users select the correct answer from 5 to 6 buttons for each question.
-	User Authentication: Logged-in users can store their high scores for each quiz level and track progress.


## dependencies

Make sure the following dependencies are installed and up-to-date:

```json
{
"express": "^4.19.2",
"react": "^18.3.1",
"react-dom": "^18.3.1"
"@types/express": "^4.17.21",
"@types/react": "^18.3.3",
"@types/react-dom": "^18.3.0",
"@types/react-router-dom": "^5.3.3",
"@typescript-eslint/eslint-plugin": "^7.15.0",
"@typescript-eslint/parser": "^7.15.0",
"@vitejs/plugin-react": "^4.3.1",
"autoprefixer": "^10.4.19",
"eslint": "^8.57.0",
"eslint-plugin-react-hooks": "^4.6.2",
"eslint-plugin-react-refresh": "^0.4.7",
"postcss": "^8.4.39",
"react-icons": "^5.3.0",
"react-router-dom": "^6.25.1",
"tailwindcss": "^3.4.6",
"typescript": "^5.2.2",
"vite": "^5.3.4"
}
```


## build and deploy instructions

Follow these steps to build and deploy the app locally or to a server:

- Local Development
	1.	Install Dependencies:

        Run the following command to install all necessary packages:

            npm install
  
	2.	Start the Development Server:

        Run this command to launch the app locally:
   	
            npm run dev
   	
    The app will be available at http://localhost:3000 (or another port specified in the console).

- Production Build
	1.	Create a Production Build:

        Run the following command to build the app for production:

   	        npm run build
  
        This will generate a dist/ directory with optimized files.
  
	2.	Deploy to a Server:

        -	Serve the files in the dist/ directory using a static file server (like Nginx, Apache, or Vercel).
      	-	If deploying to Vercel, Netlify, or Render, specify:
      	-	Build Command: `npm run build`
      	-	Output Directory: dist/

- Environment Variables
    ```
      MONGO_URI=YOUR_MONGO_DB_URI
      HOST=localhos
      PORT=4000
    ```

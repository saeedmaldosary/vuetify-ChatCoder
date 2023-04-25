
# ChatCoder Backend

The ChatCoder Backend is built using Express, dotenv, cors, and OpenAI, and provides the server-side functionality.

## Project Setup

To set up the project, first clone the repository:

```

git clone https://github.com/saeedmaldosary/vuetify-ChatCoder.git

```

### Backend Setup

1. Navigate to the `backend` directory:

```

cd vuetify-ChatCoder/backend

````

2. Install the dependencies:

```
npm install
````

3. Create a `.env` file in the `backend` directory with your OpenAI API key:

   ```
   OPENAI_API_KEY=<your API key here>
   ```

4. Start the backend server:

   ```
   npm start
   ```

   The server will start at `http://localhost:8000`.

The API will then use OpenAI's GPT-3 API to generate a readme file based on the name of your project, and return the file as a JSON response.

## Contributing

If you would like to contribute to the ChatCoder Backend, feel free to fork the repository and submit a pull request. I welcome any contributions that improve the functionality or usability of the project.

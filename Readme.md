# Run the backend

### Create the .env file in the root directory, and set the `DATABASE_URL` and `DATABASE_NAME`.

```Readme.md
DATABASE_URL = <DATABASE_URL>
DATABASE_NAME = <DATABASE_NAME>
```

### Navigate to "backend/app/", and then run the following command.

`uvicorn app.main:app --reload`

### Then, the server is running on `http://127.0.0.1:8000`.

# nooro-todo-server

# Initializing:

1. Clone the repository:

  ```bash
  git clone https://github.com/hjdjoo/nooro-todo-server.git
  cd nooro-todo-server
  ```

2. Install server dependencies

  ```bash
  npm install
  ```

3. Configure environment variables

  - Use default environment variables

    ```bash
    cp .env.example
    ```
  - Or ensure that DATABASE_URL is set to "file:./dev.db"

4. Set up Prisma SQLite database

    1. Generate Prisma client

      ```bash
      npx prisma generate
      ```
    2. Apply migrations and initialize DB:

      ```bash
      npx prisma migrate dev --name init
      ``` 

5. Start server

  ```bash
  npm start
  ```
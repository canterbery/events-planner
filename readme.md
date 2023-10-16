## ℹ️ General Info

Test task

## 🖍 Requirements

- [NodeJS](https://nodejs.org/en/) (18.x.x);
- [NPM](https://www.npmjs.com/) (9.x.x);
- [PostgreSQL](https://www.postgresql.org/) (15.4)
- run **`npx simple-git-hooks`** at the root of the project, before the start (it will set the [pre-commit hook](https://www.npmjs.com/package/simple-git-hooks) for any commits).

## 🏃‍♂️ Simple Start

1. **`npm install`** at the root
2. Fill ENVs
3. **`npx simple-git-hooks`** at the root
4. **`cd backend && npm run migrate:dev`**
5. **`cd frontend && npm run start:dev`** then **`cd backend && npm run start:dev`**
6. Enjoy <3

## 🏗 Architecture

### 🛖 Application Schema

TBA

### 💽 DB Schema

```mermaid

erDiagram

  users {
    int id PK
    dateTime created_at
    dateTime updated_at
    citext email "may have email constraint"
    text password_hash
    text password_salt
  }

  user_details ||--|| users : user_id
  user_details ||..|o files : avatar_id
  user_details {
    int id PK
    dateTime created_at
    dateTime updated_at
    int user_id FK
    varchar first_name
    varchar last_name
    int avatar_id FK "may be null if user has no avatar"
  }

  achievements {
    int id PK
    dateTime created_at
    dateTime updated_at
    varchar key "inner usage key value"
    varchar name "readable name value"
    text description "achivement description"
  }

  achievements_to_users ||--|| achievements : achievement_id
  achievements_to_users }o..|| users : user_id
  achievements_to_users {
    int id PK
    dateTime created_at
    dateTime updated_at
    int achievement_id FK
    int user_id FK
  }

  files {
    int id PK
    dateTime created_at
    dateTime update_at
    text url
  }

  %%optional relationship if articles may have preview image
  files_to_articles ||..|| files : file_id
  files_to_articles ||..|| articles : article_id
  files_to_articles {
    int id PK
    dateTime created_at
    dateTime update_at
    int file_id FK
    int article_id FK
  }

  articles }o--|| users : user_id
  articles ||..|o prompts : prompt_id
  articles ||--|| genres : genre_id
  articles {
    int id PK
    dateTime created_at
    dateTime update_at
    text text "article text"
    int user_id FK
    int genre_id FK
    int prompt_id FK "nullable"
  }

  comments }o..|| users : user_id
  comments ||--|| articles : article_id
  comments {
    int id PK
    dateTime created_at
    dateTime update_at
    text text "comment text"
    int user_id FK
    int article_id FK
  }

  article_reactions }o..|| users : user_id
  article_reactions ||--|| articles : article_id
  article_reactions {
    int id PK
    dateTime created_at
    dateTime update_at
    boolean is_like "in case if we'd have dislikes"
    int user_id FK
    int article_id FK
  }

  prompts ||..|o genres : genre_id
  prompts {
    int id PK
    dateTime created_at
    dateTime update_at
    text character "nullable"
    text setting "nullable"
    text situation "nullable"
    enum type "daily | manual"
    int genre_id FK "nullable"
  }

  genres {
    int id PK
    dateTime created_at
    dateTime update_at
    varchar key "inner usage key value"
    varchar name "readable name value"
  }

```

### 🌑 Backend

- [Fastify](https://www.fastify.io/) — a backend framework.
- [Knex](https://knexjs.org/) — a query builder.
- [Objection](https://vincit.github.io/objection.js/) — an ORM.

### 🌕 Frontend

- [React](https://reactjs.org/) — a frontend library.
- [Redux](https://redux.js.org/) + [Redux Toolkit](https://redux-toolkit.js.org/) — a state manager.

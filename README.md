

# Share Recipes — Recipe Sharing Platform

A modern web platform for discovering, sharing, and managing recipes.  Users can create profiles, share recipes, like and save dishes, and interact with a food-loving community.

# Links repositories

## Frontend

[share-recipe-frontend](https://github.com/MitkumarR/share-recipe-frontend)

## Backend

[share-recipe-backend](https://github.com/MitkumarR/share-recipe-backend)

## Features

- **User Authentication**
  - JWT-based secure authentication
  - Sign up, sign in, sign out, and token refresh
  - Role-based system: Foody, Chef, Master Chef

- **User Dashboard ("My Kitchen")**
  - View and edit profile
  - Manage personal recipes (CRUD)
  - View liked and saved recipes
  - Manage posts and lists

- **Recipe Management**
  - Create, update, and delete recipes
  - Add ingredients, steps with instructions, timers, and images
  - Assign regions, sessions (Breakfast, Lunch, Dinner), categories, and types (Veg, Non-Veg, Jain, etc.)
  - Like, save, and share recipes

- **Dynamic Filtering & Searching**
  - Filter by region, session, category, type, and ingredients
  - Search by keyword
  - Filters persist in URL for easy sharing

<!-- - **Community Features**
  - Community posts and discussions
  - User badges and roles -->



## Tech Stack

- **Frontend**: Next.js, shadcn/ui
- **Backend**: Django REST Framework
- **Database**: PostgreSQL
- **Auth**: JWT tokens (access & refresh)


## Folder Structure

```

project/
├── backend/
│   ├── manage.py
│   ├── user/         # Custom user app
│   ├── recipes/      # Recipes app (models, views, serializers)
│   └── ...
├── frontend/
│   ├── app/
│   ├── components/
│   ├── redux/
│   ├── pages/
│   └── ...
├── README.md
└── .gitignore

```


## Setup & Run

### Backend

1. Install dependencies

```

pip install -r requirements.txt

```

2. Configure `.env` for PostgreSQL and secret keys

3. Run migrations

```

python manage.py makemigrations
python manage.py migrate

```

4. Create superuser

```

python manage.py createsuperuser

```

5. Start server

```

python manage.py runserver

```


### Frontend

1. Install dependencies

```

npm install

```

2. Start dev server

```

npm run dev

```


## Deployment

- Use services like Vercel for frontend and Render or DigitalOcean for backend.
- Make sure to configure allowed origins (CORS) and secure environment variables properly.



## Contributions

Pull requests and suggestions are welcome. Please open an issue first to discuss what you'd like to change.



## License

This project is licensed under the MIT License.


## Credits

Designed and developed by Mit (MiT).  
Thanks to the open source community and all contributors who inspired parts of this project.






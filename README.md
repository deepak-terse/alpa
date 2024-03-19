# Alpa (अल्प) - A URL Shortner

![Alpa ](screenshots/desktop_1.png)

Welcome to Alpa, and shorten your long urls in seconds! 🔗


## About the App

The Alpa is a web application built with Fastify, EJS and Redis. Its primary goal is to have a one stop solution for shortening long urls and related actions. It does not have annoying ads and doesn't require a sign up.


## Key Features

- **Shorten long URLs**: Quickly shorten your lengthy URLs in just a few seconds.

- **Clean and simple Design**: The app features a clean and simple design developed using plain html css and amaterial design.

- **Responsive Design**: Access the website from various devices, including desktops, tablets, and smartphones. The responsive design ensures a consistent experience across platforms.


## Technologies Used

- **Fastify**: A next-generation web framework for Node. js that prioritizes speed, efficiency, and developer experience.

- **EJS**: A templating engine used by Node JS to create HTML template with minimal code.

- **Redis**: An in-memory data structure store utilized as a database and cache.


## Screenshots

_Home Page (Desktop)_

![Home Page (Desktop)](screenshots/desktop_1.png)


_Home Page (Mobile)_

![Home Page (Mobile)](screenshots/desktop_2.png) 


## Getting Started

1. Clone this repository: `git clone https://github.com/deepak-terse/alpa.git`
2. Navigate to the project directory: `cd alpa`
3. Install dependencies: `npm install`
4. Setup Redis either locally or on RedisLab and store the credentials.
5. Run Redis server using `sudo systemctl start redis-server` (for local setup)
5. Create an `.env` file and configure this details
    ```
    # NODE
    NODE_ENV=development
    HOST=X.X.X.X
    PORT=XXXX

    # REDIS
    REDIS_HOST=X.X.X.X
    REDIS_PORT=XXXX
    ```
6. Run the app: `npm start-ts`


Enjoy using Alpa for your URL shortening needs! If you encounter any issues or have suggestions, please feel free to open an issue or reach out to us. Happy URL shortening! 🔖🌟

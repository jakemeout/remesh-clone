# Welcome to Remesh Clone

A small web application that allows a user to create a conversation, messages within a conversation, and thoughts about those messages.

# Demo
![](remeshDemo.gif)

# Stack

The following application has been put together with a React frontend and a Rails backend.

# Local Setup Instructions

## Clone the REPO
Navigate to a directory on your local machine and clone the repo - `git clone https://github.com/jakemeout/remesh-clone.git`

## Frontend Setup

1. Navigate to the remesh-clone-fe/ folder in your terminal and run the command `npm install`.
2. Once the packages are installed you can run `npm start`.

That's it for the Front End!

## Backend API Setup

1. Navigate to the remesh-clone-api/ folder in your terminal and run the command `bundle install`.
2. NOTE: If you do not have postgresql installed, please install it with homebrew https://www.postgresql.org/download/macosx/. Another resource to summarize this installation is here https://flaviocopes.com/postgres-how-to-install/.
3. Once the bundle install is completed, run `rails db:create` to create the postgresql database.
4. Next run `rails db:migrate`.
5. If all worked as expected without any errors, you can now start the server on port 3001 by running `rails s -p 3001`

Hopefully you didn't run into any issues! Now you have the backend setup and running for playing around with the app!

Please follow up with any questions by emailing me at [Jhyde@me.com](mailto:jhyde@me.com)
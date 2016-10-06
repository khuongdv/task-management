# Introduction

This is a side project of mine that helps me log my tasks to remind myself. I can mark a task as done or schedule the task to repeat over and over.
By doing so, we can manage our time. We can separate a book into chapters and log them as task to read each chapter. This will be much more efficient IMO.
Beside the purpose of helping me manage my own tasks, this project also is a product for me to practice technologies.
**Ha Noi**, Oct 06, 2016

# Architecture and Technologies
##Architecture
You can see the architecture as below:
![Task Management Architecture](https://raw.githubusercontent.com/khuongdv/task-management/master/documents/architecture.PNG)

##Technologies
1. A NodeJS Restful API. This API will be use for both webapp and mobile app
2. A Web Interface
    * Built with ReactJS
    * Run in Nginx server
3. An Android application
    * Developed using Xamarin
    * Integrate with FireBase to get notifications
    * Persist data in RealmIO
4. Database: [MongoDB](http://mongodb.com)

# Features
1. NodeJS RESTful API    
    * Supply all service required by frontend
    * Verify each request must have valid authorization information
    * End points:
        * / : root URI. Just return a welcome message to all request to this URI
        * /user : to manipulate data relate to user (
2. ReactJS app
    * Login before use the app
    * After login, server return a token. ReactJS save it to cookie for later use
    * First page after login: Dashboard
    * List of pages:
        * Dashboard (study D3js to visualize data)
        * User info
        * List latest tasks
        * List finished tasks
        * Mark a task as done
        * Set due date/time for a task
        * Create new tasks
        * Tasks have tags to group them into groups
3. Android app
     * All task as specified in ReactJS app
     * Integrate with Firebase to get notifications
     * Save token to RealmIO
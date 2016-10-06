# Introduction

This is a side project of mine that help me log my task to remind me. I can mark a task as done or schedule the task to repeat over and over.
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
4. Database: [MongoDB](mongodb.com)

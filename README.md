There are 3 different MFE exampes in here. This is for personal development.

Using single-spa to put together a "relatively" complex microfront end for example purposes

![how](./images/how.png)

## Basic Requirements
### #1 - Zero coupling between child projects
* No importing of functions/objects/classes
* No shared state
* Share libraries through MF okay

![coupling issue](./images/coupling-issue.png)

### #2 - Near zero coupling between container & child apps
* Container shouldn't assume that a child is using a particular framework
* Any necessary communication done w/callbacks or simple events

### #3 - CSS from one poject shouldn't affect the other
* All CSS is scoped to app

### #4 - Version control shouldn't have any impact on overall project
* It cannot matter if we use monorepo or multi-repo

### #5 - Container should be able to decide to always use the latest version of an MFE OR specificy version
* Container will always use the latest version of a child app 
* Container can specify exactly what version of a child it wants to use

### #6 - Must be able to develop locally
* All code is double deployed
* Can work on ONLY your app and everything else is remote

**NEITHER OF THESE REQUIRE A REDEPLOY**

### #6 Deployment requirements
* Want to deploy each microfrontend independantly (including container)
* Location of child app must be known at build time
* Can handle deploying muliple projects
* CI/CD
* Apps are not containerized (Can be at edge)

![deployment requirements](./images/deployment-requirements.png)

![css scoping solutions](./images/css-scoping-solutions.png)

## Multi Tier requirements
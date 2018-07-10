# adopteitor-admin
Using *react-admin* for the Frontend application, we use *aor-feathers-client* to work with the feathers API using *feathers-cli* to manage the resources from *adopteitor-api*.

## Idea:
  Adopteitor is an Open Source, complete solution for Animal Shelters all around the world.
  It is separated in 3 different projects:
  - adopteitor-api is the backend, where the data structure is defined, the data gets processed and persisted. All the business logic is in this project, and works as the "brain" of Adopteitor.
  - [adopteitor-admin](https://github.com/adopteitor/adopteitor-admin) is the backend's front-end! A simple web application that lets the ADMINS interact with the adopteitor-api with WRITE PRIVILEGES. That means this is where users with Administrator role can add, edit and delete the resources, like Animals, Humans and Contracts.
  - [adopteitor-client](https://github.com/adopteitor/adopteitor-client) is the public front-end of the adopteitor system. It provides a homepage, a filtered featured list of animals, a detailed view for each animal. It also has a way to register in the system as a Human, being able to sign an adoption contract which links that Human to an Animal. Finally, it provides a way that registered and anonymous Humans to donate money for the shelter.

## Tech:
  - @feathersjs/client
  - aor-feathers-client
  - react
  - react-dom

After cloning the repo, run the following from the root folder:

```
$ npm install
$ npm run start
```

You'll find the Admin in http://localhost:3000

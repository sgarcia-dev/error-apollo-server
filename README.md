# Apollo GraphQL Server

A sample node server to test apollo client's error handling capabilities

## How to run

* `$ npm install`
* to start a apollo server on `localhost:4000`.
  * `$ npm run start-apollo`
  * Note: Running this process will yield **no errors** for valid GraphQL queries.
* to start a express server on `localhost:4000`.
  * `$ npm run start-express` 
  * Note: Running this process **will** crash any kind of GraphQL request, since it returns only static html pages by default that Apollo Client is not prepared to parse.
# chatUp
 A web client for a Socket.IO chat server

## Installation

```
npm i
npm run start
```

## Environment variables

The project uses a Google Map, so you have to set environment variable `REACT_APP_GOOGLE_API_KEY` for deployment.

The chat server itself can be accesed by `https://demo-chat-server.on.ag/`, but you can set environment variable `REACT_APP_SOCKET_URL` manually.

## Dependencies

The project uses npm package [@tinkoff/utils](https://www.npmjs.com/package/@tinkoff/utils) to combine best utils from both `ramda` and `lodash`.
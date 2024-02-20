# express-boilerplate
Node + Express + TS project boilerplate

#### Dependencies
- npm i express
- npm i -D @types/express
- npm i -D typescript
- npm i -D @types/node
- npm i -D ts-node-dev

#### Scripts
- start: npm run build && node dist/server.js
- dev: ts-node-dev --inspect --transpile-only --ignore node_modules --respawn src/server.ts
- build: tsc

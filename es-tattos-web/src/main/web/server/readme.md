
install:
npm install -g json-server

json-server --watch .\server\server.json

Para linux:
json-server --watch ./server/server.json

json-server --watch ./server/server.json --routes ./server/routes.json

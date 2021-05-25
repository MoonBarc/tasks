# API
## How does a pure-websocket API work?
A pure-websocket API doesn't have requests/responses like HTTP, however similar behavior can be achieved by using IDs. If you wanted to send a request to the server to create a task, you can generate a unique id (from time, nanoid/uuid, etc.) The server will then address your request with a payload including an ID matching the request's ID. Duplicate IDs will result in an error.

Example:
```
Client ---> Server (handshake)
Client ---> Server (request, id: abcd123e)
Client ---> Server (request, id: bcde246f)
Client <--- Server (response, id: bcde246f)
Client <--- Server (response, id: abcd123e)
```

(request ids =/= resource ids)

## Subscriptions
One of the key features of websockets is bidirectional communication. One of the ways this can be harnessed is subscriptions. By sending the server a subscribe packet, it will update you on the resources data.

Example:
```
Client ---> Server (handshake)
Client ---> Server (subscribe, id: RESOURCE_ID)
Client <--- Server (update, id: RESOURCE_ID)
Client <--- Server (update, id: RESOURCE_ID)
Client ---> Server (unsubscribe, id: RESOURCE_ID)
```
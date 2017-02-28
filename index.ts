import * as path from 'path';
import * as express from 'express';
import { createServer } from 'http';
import { Server } from 'colyseus';

// Require ChatRoom handler
import { GameRoom } from "./rooms/gameRoom";

const port = process.env.PORT || 3553;
const app = express();

// Create HTTP Server
const httpServer = createServer(app);

// Attach WebSocket Server on HTTP Server.
const gameServer = new Server({ server: httpServer });

// Register ChatRoom as "chat"
gameServer.register("game_room", GameRoom);

app.use(express.static(path.join(__dirname, "static")));

httpServer.listen(port);
console.log(`Listening on http://localhost:${ port }`);

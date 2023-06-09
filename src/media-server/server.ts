import { CONFIG_SERVER } from "./config"
 const NodeMediaServer = require("node-media-server")


var nms = new NodeMediaServer(CONFIG_SERVER)
nms.run();
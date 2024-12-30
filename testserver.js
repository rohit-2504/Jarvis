const http = require("http");
const path = require("path");
const express = require("express");
const fs = require("fs"); // Missing fs import
const { Server } = require("socket.io");
const app = express();
const dbdata = require("./data_files/data.json");
const trainer = require("./data_files/trainer.json");
const db = require("./data_files/MOCK_DATA.json");
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static(path.resolve("./"))); // Serves static files

// Socket.IO connection
io.on("connection", (socket) => {
    console.log("A new user connected", socket.id);

    // Emit data to the connected user
    socket.emit("user-details", db);
    socket.emit("getdata", dbdata);
    socket.emit("trainerGet", trainer);

    // Handle `savedata` event
    socket.on("savedata", (uinput) => {
        try {
            console.log(uinput);
            const input = uinput.split(".");
            const sdata = input[0];
            const meth = input[1];

            if (meth.length > 2) {
                const filePath = path.resolve("./data_files/data.json");
                const rawData = fs.readFileSync(filePath, "utf-8");
                const data = rawData.trim() === "" ? [] : JSON.parse(rawData);

                data.push({ method: meth, data: sdata });
                fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
                console.log(`Data added successfully: ${sdata} and ${meth}`);
            }
        } catch (error) {
            console.error("Error saving data:", error.message);
        }
    });

    // Handle `trainerPost` event
    socket.on("trainerPost", (uinput) => {
        try {
            console.log(uinput);
            const input = uinput.split(".");
            const ukey = input[0];
            const uvalue = input[1];

            if (uvalue.length > 2) {
                const filePath = path.resolve("./data_files/trainer.json");
                const rawData = fs.readFileSync(filePath, "utf-8");
                const data = rawData.trim() === "" ? [] : JSON.parse(rawData);

                data.push({ key: ukey, value: uvalue });
                fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
                console.log(`Data added successfully: ${ukey} and ${uvalue}`);
            }
        } catch (error) {
            console.error("Error saving trainer data:", error.message);
        }
    });
});

// Serve the main HTML file
app.get("/", (req, res) => {
    res.sendFile(path.resolve("./index.html"));
});

// Start the server
server.listen(8080, () => console.log("Server started at http://localhost:8080"));

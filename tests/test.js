import Table from "../models/table.js";
// import Robot from "../models/robot.js";
import fs from "fs";

console.log("Test begins ##");

// Read commands from file
const filePath = "./tests/command.txt";

fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
        console.error("Error reading command file:", err.message);
        return;
    }

    try {
        const commands = data.split("\n").map(line => line.trim()).filter(line => line);
        const table = new Table(5); // Adjust size if needed
        let robot = null;

        commands.forEach(command => {
            const [action, args] = command.split(" ");
            switch (action) {
                case "PLACE":
                    const placeArgs = args.split(",").map(arg => isNaN(arg) ? arg : parseInt(arg));
                    if (robot === null) {
                        table.place(placeArgs);
                        robot = table.robots[0]; // Get the first robot
                    } else {
                        table.replace(robot, placeArgs);
                    }
                    break;
                case "MOVE":
                    robot?.forward();
                    break;
                case "LEFT":
                    robot?.left();
                    break;
                case "RIGHT":
                    robot?.right();
                    break;
                case "REPORT":
                    robot?.report();
                    break;
                case "SHOW":
                    table.show();
                    break;
                default:
                    console.log(`Invalid command: ${command}`);
            }
        });
    } catch (error) {
        console.error("Error running test:", error.message);
    }

    console.log("Test Done ##");

});
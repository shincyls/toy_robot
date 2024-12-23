
import Robot from './robot.js';

export class Table {

    constructor(size = 5, name = "Table 1") {
        this.size = size;
        this.name = name; // Table Name
        this.robots = []; // Track all robots on the table
    }

    isValidPosition(x, y) {
        return x >= 0 && x < this.size && y >= 0 && y < this.size;
    }

    isPositionOccupied(x, y) {
        return this.robots.some(robot => robot.x === x && robot.y === y);
    }

    place(args) {
        const [x, y, direction] = args;
        if (args && args.length === 3) {
            if (this.isValidPosition(x, y)) {
                if (!this.isPositionOccupied(x, y)) {
                    const robot = new Robot(x, y, direction, this);
                    this.robots.push(robot);
                    console.log("Robot placed successfully.");
                    return robot;  // Return the created robot
                } else {
                    console.log("Invalid PLACE command: Position already occupied by another robot.");
                }
            } else {
                console.log("Invalid PLACE command: Out of bounds.");
            }
        } else {
            console.log("Invalid PLACE command. e.g., PLACE X,Y,NORTH");
        }
        return null;
    }

    replace(currentRobot, args) {
        const [x, y, direction] = args;
        if (this.isValidPosition(x, y)) {
            if (!this.isPositionOccupied(x, y)) {
                currentRobot.x = x;
                currentRobot.y = y;
                currentRobot.facing = direction.toUpperCase();
                console.log("Robot replace successfully.");
            } else {
                console.log("Invalid REPLACE command: Position occupied by another robot.");
            }
        } else {
            console.log("Invalid REPLACE command: Out of table.");
        }
    }

    show() {
        const grid = Array.from({ length: this.size }, () => Array(this.size).fill("*"));

        const directionMap = {
            "NORTH": "^",
            "EAST": ">",
            "SOUTH": "v",
            "WEST": "<",
        };

        this.robots.forEach((robot) => {
            if (robot.x !== null && robot.y !== null) {
                grid[robot.y][robot.x] = `${directionMap[robot.facing]}`;
            }
        });

        for (let row = 0; row < this.size; row++) {
            console.log(grid[row].join(""));
        }
        console.log("");
    }
}

export default Table;
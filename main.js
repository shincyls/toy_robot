// import { Robot } from './models/robot.js';  
import { Table } from './models/table.js';
import readline from "readline";

function main() {
   
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    let table;
    let gameOn = true;
    const commands = `
        REPORT - Report the robot's position
        PLACE X,Y,F - Replace robot's position (eg: PLACE 0,0,NORTH)
        LEFT - Turn left
        RIGHT - Turn right
        MOVE - Move forward
        SHOW - Show robot on table
        EXIT - Exit the game`;

    console.log(`
    Welcome to the Toy Robot Simulator! Let's get started!
    Instructions:
    1. Set Table Size
    2. PLACE The Robot (e.g., PLACE 0,0,NORTH)
    3. Use Following Commands to Control Robot: ${commands}
    `);

    // Step 1 - Initiate Table
    const promptTableSize = () => {
        rl.question("1. Set Table Size (N x N): ", (input) => {
            const size = parseInt(input.trim(), 10);
            if (!isNaN(size) && size > 0) {
                table = new Table(size);
                console.log(`Table size set to ${size}x${size}.`);
                promptPlaceRobot();
            } else {
                console.log("Invalid input. Please enter a positive integer.");
                promptTableSize();
            }
        });
    };

    // Step 2 - Drop Robot On Table
    const promptPlaceRobot = () => {
        rl.question("2. PLACE The Robot (e.g., PLACE 0,0,NORTH): ", (input) => {
            const args = input.trim().toUpperCase().split(" ")[1]?.split(",");
            const robot = table.place(args);
            if (robot) {
                promptCommand(robot);  // Pass the created robot to the command prompt
            } else {
                promptPlaceRobot();  // If placing robot fails, ask again
            }
        });
    };

    // Step 3 - Remote Robot By Command (Loop Until Exit)
    const promptCommand = (robot) => {
        rl.question("3. Input Command: ", (input) => {
            const command = input.trim().split(' ')[0].toUpperCase();
            switch (command) {
                case "PLACE":
                    const args = input.split(' ')[1]?.split(',');
                    table.replace(robot, args);
                    break
                case "REPORT":
                    robot.report();
                    break;
                case "LEFT":
                    robot.left();
                    break;
                case "RIGHT":
                    robot.right();
                    break;
                case "MOVE":
                    robot.forward();
                    break;
                case "SHOW":
                    table.show();
                    break;
                case "EXIT":
                    console.log("Thanks For Playing. See You Again!");
                    gameOn = false;
                    rl.close();
                    return;
                default:
                    console.log(`Invalid Commands. Please use following commands only: ${commands}`);
            }

            // While Game On Continue Prompt For Command
            if (gameOn) promptCommand(robot);
        });
    };

    // Game Start
    promptTableSize();

}

// Initiate
main();
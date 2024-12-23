# Toy Robot Simulator

A simple toy robot simulator with CLI. The robot can forward, turn left/right, and report its position based on input commands, and show diagram. This project written in javascript and required node.js to run.

## Features

- Initialize a Tabletop.
- Place the robot on the table.
- Control the robot with commands: `MOVE`, `LEFT`, `RIGHT`, and `REPORT`.
- Input commands from a file for batch execution.
- Modular design for scalability and maintainability.
- Basic testing with sample input files.

## Prerequisites

- Node.js (v16 or later recommended)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/shincyls/toy_robot.git
   cd toy_robot
   ```

2. Initialize the project and install dependencies:
   ```bash
   npm init -y
   ```

3. Create the following folder structure:
   ```
   toy_robot/
   ├── models/
   │   ├── table.js
   │   ├── robot.js
   ├── tests/
   │   ├── test.js
   │   ├── commands.txt
   ├── main.js
   ├── package.json
   ```

## Usage

### Run the Main Program

1. Write your commands in a file `commands.txt` in the `/tests` directory:
   ```
   PLACE 0,0,NORTH
   MOVE
   LEFT
   MOVE
   REPORT
   ```

2. Execute the program:
   ```bash
   node main.js
   ```

### Run Tests

1. Test scripts can be found in the `/tests` directory. Run the test script:
   ```bash
   node tests/test.js
   ```

2. The test reads commands from `tests/commands.txt` and verifies the output.

## Commands

- `PLACE X,Y,F`: Places the robot on the tabletop at position `(X, Y)` facing direction `F` (`NORTH`, `SOUTH`, `EAST`, `WEST`).
- `MOVE`: Moves the robot one step forward in the direction it is facing.
- `LEFT`: Rotates the robot 90 degrees to the left.
- `RIGHT`: Rotates the robot 90 degrees to the right.
- `REPORT`: Outputs the current position and direction of the robot.
- `SHOW`: Show the Table and the Robot on symbolized text based.

### Example Input

```
PLACE 0,0,NORTH
MOVE
REPORT
```

### Example Output

```
0,1,NORTH
```

## File Descriptions

- `models/table.js`: Defines the tabletop and its dimensions.
- `models/robot.js`: Defines the robot's behavior and properties.
- `main.js`: The main entry point for executing commands.
- `tests/test.js`: Contains basic tests for verifying the program's behavior.
- `tests/commands.txt`: Example command file for testing.

## Concerns For Future Development

- Add support for multiple robots.
- Each robot have stats HP/ATK/DEF which trigger battle on crash


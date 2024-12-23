
class Robot {
    constructor(x, y, facing, table, name = "Robot 1") {
        this.x = x;
        this.y = y;
        this.name = name;
        this.facing = facing.toUpperCase();
        this.table = table;
        this.directions = ["NORTH", "EAST", "SOUTH", "WEST"];
    }

    forward() {
        let [newX, newY] = [this.x, this.y];
        switch (this.facing) {
            case "NORTH":
                newY--;
                break;
            case "EAST":
                newX++;
                break;
            case "SOUTH":
                newY++;
                break;
            case "WEST":
                newX--;
                break;
        }

        if (this.table.isValidPosition(newX, newY)) {
            this.x = newX;
            this.y = newY;
        } else {
            console.log("Stop! Robot Will Fall Off From Table");
        }
    }

    left() {
        const currentIndex = this.directions.indexOf(this.facing);
        this.facing = this.directions[(currentIndex + 3) % 4];
    }

    right() {
        const currentIndex = this.directions.indexOf(this.facing);
        this.facing = this.directions[(currentIndex + 1) % 4];
    }

    report() {
        console.log(`Output: ${this.x},${this.y},${this.facing}`);
    }

}

export default Robot;
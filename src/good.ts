interface Workable {
  work(): void;
}

interface Codeable {
  code(): void;
}

interface Eatable {
  eat(): void;
}

interface Sleepable {
  sleep(): void;
}

export class Human implements Workable, Codeable, Eatable, Sleepable {
  work() {
    console.log("Human working");
  }

  code() {
    console.log("Human coding");
  }

  eat() {
    console.log("Human eating");
  }

  sleep() {
    console.log("Human sleeping");
  }
}

export class Robot implements Workable, Codeable {
  work() {
    console.log("Robot working");
  }

  code() {
    console.log("Robot coding");
  }
}
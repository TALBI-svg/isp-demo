interface Worker {
  work(): void;
  eat(): void;
  sleep(): void;
  code(): void;
}

export class Robot implements Worker {
  work() {
    console.log("Robot is working");
  }

  eat() {
    throw new Error("Robot doesn't eat");
  }

  sleep() {
    throw new Error("Robot doesn't sleep");
  }

  code() {
    console.log("Robot is coding");
  }
}

export class Human implements Worker {
  work() {
    console.log("Human is working");
  }

  eat() {
    console.log("Human is eating");
  }

  sleep() {
    console.log("Human is sleeping");
  }

  code() {
    console.log("Human is coding");
  }
}
import { Human, Robot } from "./good";
import { Human as BadHuman, Robot as BadRobot } from "./bad";


const human = new Human();
human.work();
human.eat();

const robot = new Robot();
robot.work();
robot.code();

const badHuman = new BadHuman();
badHuman.work();
badHuman.eat(); 

const badRobot = new BadRobot();
badRobot.work();
badRobot.eat();
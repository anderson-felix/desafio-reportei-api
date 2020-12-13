"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const routes_1 = __importDefault(require("./routes"));
const server_1 = __importDefault(require("./server"));
class App {
    constructor() {
        this.routes();
        this.server();
    }
    server() {
        server_1.default;
    }
    routes() {
        routes_1.default;
    }
}
exports.default = new App();

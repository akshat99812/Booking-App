"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("@prisma/client");
var prisma = new client_1.PrismaClient();
function seed() {
    return __awaiter(this, void 0, void 0, function () {
        var types, consultationTypes, sessions, hours, durations, _i, consultationTypes_1, type, _a, hours_1, hour, _b, _c, minute, hour, error_1;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _d.trys.push([0, 3, 4, 6]);
                    types = [
                        { name: "Startup" },
                        { name: "Career" },
                    ];
                    return [4 /*yield*/, Promise.all(types.map(function (type) { return prisma.consultationType.create({ data: type }); }))];
                case 1:
                    consultationTypes = _d.sent();
                    sessions = [];
                    hours = Array.from({ length: 6 }, function (_, i) { return i + 5; });
                    durations = [60, 30];
                    for (_i = 0, consultationTypes_1 = consultationTypes; _i < consultationTypes_1.length; _i++) {
                        type = consultationTypes_1[_i];
                        for (_a = 0, hours_1 = hours; _a < hours_1.length; _a++) {
                            hour = hours_1[_a];
                            sessions.push({
                                date: new Date(),
                                typeId: type.id,
                                slot: "".concat(hour, ":00 - ").concat(hour + 1, ":00"),
                                duration: 60,
                                available: true
                            });
                        }
                        for (_b = 0, _c = [0, 30]; _b < _c.length; _b++) {
                            minute = _c[_b];
                            hour = 5;
                            sessions.push({
                                date: new Date(),
                                typeId: type.id,
                                slot: "".concat(hour, ":").concat(minute, " - ").concat(hour, ":").concat(minute + 30),
                                duration: 30,
                                available: true
                            });
                        }
                    }
                    return [4 /*yield*/, Promise.all(sessions.map(function (session) { return prisma.session.create({ data: session }); }))];
                case 2:
                    _d.sent();
                    console.log("Seed data successfully executed.");
                    return [3 /*break*/, 6];
                case 3:
                    error_1 = _d.sent();
                    console.error("Error seeding data:", error_1);
                    return [3 /*break*/, 6];
                case 4: return [4 /*yield*/, prisma.$disconnect()];
                case 5:
                    _d.sent();
                    return [7 /*endfinally*/];
                case 6: return [2 /*return*/];
            }
        });
    });
}
seed();

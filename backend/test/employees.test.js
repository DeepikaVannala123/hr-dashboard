const request = require("supertest");
const express = require("express");
const { getEmployees } = require("../routes/employeeHandler.js");

const app = express();
app.use("/api/employees", getEmployees);

describe("GET /api/employees", () => {
    it("returns employees for Zepto", async () => {
        const res = await request(app).get("/api/employees?company=zepto");
        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
        expect(res.body[0]).toHaveProperty("name");
    });

    it("returns 404 for unknown company", async () => {
        const res = await request(app).get("/api/employees?company=unknown");
        expect(res.statusCode).toBe(404);
        expect(res.body).toEqual({ message: "Company not found" });
    });

    it("returns 400 if company query param is missing", async () => {
        const res = await request(app).get("/api/employees");
        expect(res.statusCode).toBe(400);
        expect(res.body).toEqual({ message: "Company parameter is required" });
    });

    it("returns an empty array if company exists but has no employees", async () => {
        const res = await request(app).get("/api/employees?company=emptyco");
        // Assuming your handler returns 200 and [] for companies with no employees
        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
        expect(res.body.length).toBe(0);
    });

    it("returns employees with expected properties", async () => {
        const res = await request(app).get("/api/employees?company=zepto");
        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
        if (res.body.length > 0) {
            const employee = res.body[0];
            expect(employee).toHaveProperty("name");
            expect(employee).toHaveProperty("status");
            expect(employee).toHaveProperty("department");
        }
    });
});

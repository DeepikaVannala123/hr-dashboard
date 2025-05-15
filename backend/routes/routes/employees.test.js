const request = require("supertest");
const express = require("express");
const employeeRoutes = require("./employees");

const app = express();
app.use("/api/employees", employeeRoutes);

describe("GET /api/employees/:company/employees", () => {
  it("returns employees for Zepto", async () => {
    const res = await request(app).get("/api/employees/zepto/employees");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body[0]).toHaveProperty("name");
  });

  it("returns 404 for unknown company", async () => {
    const res = await request(app).get("/api/employees/unknown/employees");
    expect(res.statusCode).toBe(404);
    expect(res.body).toEqual({ message: "Company not found" });
  });
});

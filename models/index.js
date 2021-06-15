const Student = require("./student");
const login = require("./login");
const Course = require("./course");
const Module = require("./module");
const Contrast = require("./contrast");

Student.hasOne(Course, {
  foreignKey: "course_id",
});

Course.hasMany(Module, {
  foreignKey: "module_id",
});

Module.hasMany(Contrast, {
  foreignKey: "contrast_id",
});

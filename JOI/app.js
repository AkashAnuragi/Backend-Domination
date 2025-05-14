const express = require('express');
const app = express();
const { userModel, validateModel } = require("./models/user-model");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("hey! chal raha hai!");
});

app.post("/create", async (req, res) => {
  const { username, name, age, contact, email } = req.body;

  // ✅ Validate input using Joi
  const { error } = validateModel({ username, name, age, contact, email });
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  try {
    // ✅ Save user to MongoDB
    await userModel.create({ username, name, age, contact, email });
    res.status(201).send("User created successfully.");
  } catch (err) {
    console.error("Error saving user:", err);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});

import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";
export const signUp = async (req, res) => {
  //   console.log(req.body);
  const { username, email, password } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    return res.status(400).json({ message: "All fields are required." });
  }
  const hashedPassword = bcryptjs.hashSync(password, 10);

  const newUser = new User({ username, email, password: hashedPassword });

  try {
    await newUser.save();
    res.json("Sign Up User successfully !!!!");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

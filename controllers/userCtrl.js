const User = require("../models/userModel");
const userCtrl = {
  register: async (req, res) => {
    try {
      const { name, email, password } = req.body;

      const user = await User.findOne({ email });
      if (user)
        return res.status(400).json({ msg: "The email already exists." });

      if (password.length < 6)
        return res
          .status(400)
          .json({ msg: "Password is at least 6 characters long." });

      res.json({ msg: "Resgister Succesfull" });
      //   // Password Encryption
      //   const passwordHash = await bcrypt.hash(password, 10);
      //   const newUser = new Users({
      //     name,
      //     email,
      //     password: passwordHash,
      //   });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

module.exports = userCtrl;

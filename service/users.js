const userModel = require("../models/users");

const findAll = async () => {
  const All = await userModel.findAll();
  if (!All.error) {
    const ById = All.sort((a, b) => a.userId - b.userId);
    return { status: 202, ById, Byname: All };
    // res.json({ ById, ByName: Items });
  }
  if (All.error === "No users found") {
    return { status: 404, error: All.error };
    // res.status(404).json({ error: "No users found" });
  }
  if (All.error === "Could not retreive users") {
    return { status: 500, error: All.error };
    // res.status(500).json({ error: "Could not retreive users" });
  }
};

module.exports = {
  findAll,
}

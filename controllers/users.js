const userService = require("../service/users");

const params = {
  TableName: USERS_TABLE,
};

const findAll = async () => {
  const All = await userService.findAll();
  const { status } = All;
  if (status === 202) {
    const { ById, ByName } = All;
    // return { status: 202, ById, Byname: All };
    return res.json({ status, ById, ByName });
  }
  if (All.error === 404) {
    const { error } = All;
    // return { status: 404, error: All.error };
    return res.status(404).json({ error });
  }
  if (All.error === "Could not retreive users") {
    const { error } = All;
    // return { status: 500, error: All.error };
    return res.status(500).json({ error });
  }
};

module.exports = {
  findAll,
};

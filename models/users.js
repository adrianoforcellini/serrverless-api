const dynamoDbClient = new AWS.DynamoDB.DocumentClient();

const findAll = async () => {

  const params = {
    TableName: USERS_TABLE,
  };
  
  try {
    const { Items } = await dynamoDbClient.scan(params).promise();
    if (Items) {
      // const ById = Items.sort((a, b) => a.userId - b.userId);
      return Items;
      // res.json({ ById, ByName: Items });
    } else {
      return { error: "No users found" };
      // res.status(404).json({ error: "No users found" });
    }
  } catch (error) {
    return { error: "Could not retreive users" };
    // res.status(500).json({ error: "Could not retreive users" });
  }
};

module.exports = {
  findAll,
};

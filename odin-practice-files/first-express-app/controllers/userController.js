// user controller file - controllers/userController.js
const getUserById = async (req, res) => {
    const userId = req.params.id;

    const user = await someDBQueryToGetUSer(userId);

    if (!user) {
        res.status(404).send("User not found");
        return;
    }

    res.send(`User found: ${user.name}`);
};
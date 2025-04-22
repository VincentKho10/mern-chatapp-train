const userModel = require("../models/user.model");

const loginController = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await userModel.findOne({username, password})
        if(!user){
            return res.status(400).json({message: "Credentials mismatch"})
        }
        res.status(200).json({message: "Logged successfully"});
    } catch (error) {
        console.error("An error occurred on login controller", error.message)
        res.status(500).json({message: "Internal server error"})
    }
};

const signUpController = async (req, res) => {
    try {
        const { full_name, gender, username, password, confirmation } = req.body;
        
        if(await userModel.findOne({username})){
            return res.status(400).json({ error:"Unable to register an registered user" })
        }

        if(password!=confirmation){
            return res.status(400).json({ error:"Password and Confirmation Mismatch" })
        }

        const newUser = new userModel({full_name,username,password,gender})
        newUser.save()

        res.status(200).json({message: "Your account was created successfully"})
    } catch (error) {
        console.error("An error occurred on signup controller", error.message)
        res.status(500).json({error: "Internal server error"})
    }
};

const logoutController = (req, res)=>{
    try {
        res.status(200).json({message: "Logged out Successfully"})
    } catch (error) {
        console.error("An error occurred on logout controller", error.message)
        res.status(500).json({error: "Internal server error"})
    }
}

module.exports = { loginController, signUpController, logoutController };

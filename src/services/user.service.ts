import User from "../models/user";

class UserService {
    public getUser = async (option: string) => {
        const user = await User.findOne({ Email: option });
        return user;
    }
}

export default UserService;
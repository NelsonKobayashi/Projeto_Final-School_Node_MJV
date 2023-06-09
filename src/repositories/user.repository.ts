import { IUser, User } from "../models/user.model";

class UserRepository {
    getAll() {
        return User.find();
    }

    getByEmail(email: string){
        return User.findOne({ email: email });   
    }

    create(user: IUser){
        return User.create(user);
    }

    update(email: string, user: Partial<IUser>){
        return User.updateOne({ email: email }, { $set: user });
    }

    remove(email: string) {
        return User.deleteOne({email: email});
    }

}

export default new UserRepository();
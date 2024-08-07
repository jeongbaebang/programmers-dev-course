import User from '../model/userModel.js';

const create = async (req, res) => {
  try {
    const userData = new User(req.body);
    const { email } = userData;
    const userExist = await User.findOne({ email });

    if (userExist) {
      return res.status(400).json({ message: 'user already exists' });
    }

    const saveUser = await userData.save();

    res
      .status(200)
      .json({ message: 'created successfully', payload: saveUser });
  } catch (e) {
    console.log('create 메소드 에러');
    res.status(500).json({ message: 'error creating user' });
  }
};

const read = async (req, res) => {
  try {
    const users = await User.find();

    if (users.length === 0) {
      return res.status(404).json({ message: 'Not Found' });
    }

    res.status(200).json({ payload: users });
  } catch (e) {
    res.status(500).json({ error: 'Inter Server Error' });
  }
};

const update = async (req, res) => {
  try {
    const id = req.params.id;
    const userExist = await User.findOne({ _id: id });

    if (!userExist) {
      return res.status(404).json({ message: 'Not found' });
    }

    const updateUser = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    res.status(200).json({ updateUser });
  } catch (e) {
    res.status(500).json({ error: 'Inter Server Error' });
  }
};

const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const userExist = await User.findOne({ _id: id });

    if (!userExist) {
      return res.status(404).json({ message: 'Not found' });
    }

    await User.findByIdAndDelete(id);
    res.status(200).json({ message: 'delate' });
  } catch {
    res.status(500).json({ error: 'Inter Server Error' });
  }
};

export { create, read, update, deleteUser };

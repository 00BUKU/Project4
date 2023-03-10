import User from '../models/user.js'
import Booking from "../models/booking.js";
import jwt from 'jsonwebtoken'
const SECRET = process.env.SECRET;




export default {
  signup,
  login,
  getUserById
};
async function getUserById(req, res) {
  try {
    const user = await User.findById(req.params.id)
    const bookings = await Booking.find(User._id)
    if (!user) return res.status(404).json({err: 'User not found'});
    res.json({user: user, bookings: bookings});
  } catch (err) {
    res.status(500).json(err);
  }
}

async function signup(req, res) {
  const user = new User(req.body);
  try {
    await user.save();
    const token = createJWT(user);
    res.json({ token });
  } catch (err) {
    // Probably a duplicate email
    res.status(400).json(err);
  }
}

async function login(req, res) {
 
  try {
    const user = await User.findOne({email: req.body.email});
   
    if (!user) return res.status(401).json({err: 'bad credentials'});
    user.comparePassword(req.body.password, (err, isMatch) => {
      
      if (isMatch) {
        const token = createJWT(user);
        res.json({token, user});
      } else {
        return res.status(401).json({err: 'bad credentials'});
      }
    });
  } catch (err) {
    return res.status(401).json(err);
  }
}

/*----- Helper Functions -----*/

function createJWT(user) {
  return jwt.sign(
    {user}, // data payload
    SECRET,
    {expiresIn: '24h'}
  );
}



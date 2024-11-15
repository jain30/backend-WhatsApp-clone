import { request, response } from "express";
import Users from "../models/user.js";

export const addUser = async (request, response) => {
  try {
    let exist = await Users.findOne({ sub: request.body.sub });
    console.log("hello");
    if (exist) {
      response.status(200).json({ msg: "user already exist" });
      return;
    }

    const newUser = new Users(request.body);
    await newUser.save();
  } catch (error) {
    response.status(500).json(error.message);
  }
};

export const getUser = async (request, response) => {
  try {
    let users = await Users.find({});
    return response.status(200).json(users);
  } catch (error) {
    response.status(500).json(error.message);
  }
};

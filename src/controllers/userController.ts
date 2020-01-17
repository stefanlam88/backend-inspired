import { Request, Response } from "express";
import User from "./../user";
const uuidv4 = require('uuid/v4');

export let allUsers = (req: Request, res: Response) => {
  let users = User.find((err: any, users: any) => {
    if (err) {
      res.send({status:false, error:err});
    } else {
      res.send({status: true, data:users, message:"Data Retrieved successfully"});
    }
  });
};

export let getUser = (req: Request, res: Response) => {
  let user = User.findById(req.params.id, (err: any, user: any) => {
    if (err) {
      res.send({status: false, error:err, data:{}});
    } else {
      res.send({status: true, data:user, message:"Data Retrieved successfully"});
    }
  });
};

export let deleteUser = (req: Request, res: Response) => {
  let user = User.deleteOne({ _id: req.params.id }, (err: any) => {
    if (err) {
      res.send(err);
    } else {
      res.send({status:true, message:"Successfully Deleted User"});
    }
  });
};

export let updateUser = (req: Request, res: Response) => {

  let user = req.body;
  user.modifiedDate = new Date().getTime();
  let book = User.findByIdAndUpdate(
    req.params.id,
    user,
    (err: any, user: any) => {
      if (err) {
        res.send({status:false, error:err});
      } else {
        res.send({status:true, data:user, message:"Successfully Updated User"});
      }
    }
  );
};

export let addUser = (req: Request, res: Response) => {
  var user = new User(req.body);

  user.userId = uuidv4();
  user.modifiedDate = new Date().getTime();
  user.createdDate = new Date().getTime();

  user.save((err: any) => {
    if (err) {
      res.send({status:false, error:err});
    } else {
      res.send({status:true, data:user, message:"Successfully Created User"});
    }
  });

};

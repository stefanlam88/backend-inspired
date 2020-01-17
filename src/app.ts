import express, { Request, Response } from "express";
import * as userController from "./controllers/userController";

// Our Express APP config
const app = express();
app.use(express.json());
app.set("port", process.env.PORT || 3000);



// API Endpoints

app.get('/', function(req, res){
  res.json({status:false, message:'route not available'});
});

// API Endpoints
app.get("/users", userController.allUsers);
app.get("/user/:id", userController.getUser);
app.post("/user", userController.addUser);
app.put("/user/:id", userController.updateUser);
app.delete("/user/:id", userController.deleteUser);

const server = app.listen(app.get("port"), () => {
  console.log("App is running on http://localhost:%d", app.get("port"));
});

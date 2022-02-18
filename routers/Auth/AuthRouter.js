import express from 'express';
import {
  CreateAccount,
  GoogleAccount,
  Login,
} from '../../Authentication/AuthController.js';

const authRouter = express.Router();

authRouter
  .post('/createAccount', CreateAccount)
  .post('/login', Login)
  .post('/googleAccount', GoogleAccount);

export default authRouter;

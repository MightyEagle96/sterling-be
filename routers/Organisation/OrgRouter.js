import express from 'express';
import { IsLoggedIn } from '../../Authentication/AuthController.js';
import { CreateOrganisation } from '../../controllers/organisation/OrgController.js';

const orgRouter = express.Router();
orgRouter.use(IsLoggedIn).post('/createOrganisation', CreateOrganisation);

export default orgRouter;

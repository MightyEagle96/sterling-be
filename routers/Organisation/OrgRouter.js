import express from 'express';
import { IsLoggedIn } from '../../Authentication/AuthController.js';
import {
  CreateOrganisation,
  ViewOrganisations,
} from '../../controllers/organisation/OrgController.js';

const orgRouter = express.Router();
orgRouter
  .use(IsLoggedIn)
  .post('/createOrganisation', CreateOrganisation)
  .get('/viewOrganisations', ViewOrganisations);

export default orgRouter;

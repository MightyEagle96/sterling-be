import express from 'express';
import multer from 'multer';
import { IsLoggedIn } from '../../Authentication/AuthController.js';
import {
  CreateOrganisation,
  UploadOrganisationPhoto,
  ViewOrganisations,
  ViewOrganisation,
} from '../../controllers/organisation/OrgController.js';

const orgRouter = express.Router();

const upload = multer({ dest: 'public/images' });
orgRouter
  .use(IsLoggedIn)
  .post('/createOrganisation', CreateOrganisation)
  .post(
    '/uploadPhoto/:id',
    upload.single('organisationPhoto'),
    UploadOrganisationPhoto
  )
  .get('/viewOrganisations', ViewOrganisations)
  .get('/viewOrganisation/:id', ViewOrganisation);

export default orgRouter;

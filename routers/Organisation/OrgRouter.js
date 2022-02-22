import express from 'express';
import multer from 'multer';
import { IsLoggedIn } from '../../Authentication/AuthController.js';
import {
  CreateOrganisation,
  UploadOrganisationPhoto,
  ViewOrganisations,
  ViewOrganisation,
} from '../../controllers/organisation/OrgController.js';
import {
  CreateProduct,
  UploadProductImages,
  ViewProducts,
} from '../../controllers/organisation/ProductController.js';

const orgRouter = express.Router();

const upload = multer({ dest: 'public/images' });
orgRouter
  .get('/products', ViewProducts)
  .use(IsLoggedIn)
  .post('/createOrganisation', CreateOrganisation)
  .post(
    '/uploadPhoto/:id',
    upload.single('organisationPhoto'),
    UploadOrganisationPhoto
  )
  .get('/viewOrganisations', ViewOrganisations)
  .get('/viewOrganisation/:id', ViewOrganisation)
  .post('/createProduct', CreateProduct)
  .patch(
    '/uploadProductImages/:id',
    upload.array('image', 4),
    UploadProductImages
  );

export default orgRouter;

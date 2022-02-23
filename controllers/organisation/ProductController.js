import product from '../../models/product.js';
import fs from 'fs';
import { google } from 'googleapis';

const KEYFILEPATH = 'public/sterlingserviceaccount.json';
const SCOPES = ['https://www.googleapis.com/auth/drive'];

const auth = new google.auth.GoogleAuth({
  keyFile: KEYFILEPATH,
  scopes: SCOPES,
});

export const CreateProduct = async (req, res) => {
  const createdProduct = await product.create(req.body);
  res.json({ createdProduct });
};

export const UploadProductImages = async (req, res) => {
  await product.findById(req.params.id);

  for (let i = 0; i < req.files.length; i++) {
    const newFileName = `${req.params.id}img${i}.${
      req.files[i].mimetype.split('/')[1]
    }`;

    const filePath = `public/images/${newFileName}`;

    fs.rename(
      `public/images/${req.files[i].filename}`,
      filePath,
      async () => {}
    );

    CreateAndUploadFile(auth, newFileName, req.files[i], filePath);
  }
  async function CreateAndUploadFile(auth, newFileName, file, filePath) {
    const driveService = google.drive({ version: 'v3', auth });

    let fileMetaData = {
      name: newFileName,
      parents: ['1UFsyKj7RtN8qkJICYEgK9n35Av2D_gLF'],
    };

    let media = {
      mimetype: file.mimetype,
      body: fs.createReadStream(filePath),
    };

    let response = await driveService.files.create({
      requestBody: fileMetaData,
      media,
      fields: 'id',
    });

    switch (response.status) {
      case 200:
        await product.findByIdAndUpdate(req.params.id, {
          $push: {
            images: `https://drive.google.com/uc?id=${response.data.id}`,
          },
        });
        fs.unlink(filePath, (err) => {
          if (err) {
            throw err;
          }
        });
        break;

      default:
        break;
    }
  }

  res.status(201).json({ title: 'Created', message: 'Product Created' });
};

export const ViewProducts = async (req, res) => {
  const products = await product.find(req.query);
  res.json({ products });
};

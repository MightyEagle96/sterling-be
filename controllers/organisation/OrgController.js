import organisation from '../../models/organisation.js';
import fs from 'fs';
import { google } from 'googleapis';

const KEYFILEPATH = 'public/sterlingserviceaccount.json';
const SCOPES = ['https://www.googleapis.com/auth/drive'];

const auth = new google.auth.GoogleAuth({
  keyFile: KEYFILEPATH,
  scopes: SCOPES,
});
export const CreateOrganisation = async (req, res) => {
  try {
    if (!req.body.organisationName) {
      return res
        .status(400)
        .json({ title: 'Error', message: 'An organisation must have a name' });
    }
    req.body.admin = req.account._id;
    await organisation.create(req.body);
    res
      .status(201)
      .json({ title: 'Success', message: 'New Organisation Created' });
  } catch (error) {
    res.status(500).json({ message: 'Something bad happened on the server' });
  }
};

export const ViewOrganisations = async (req, res) => {
  try {
    const organisations = await organisation.find({ admin: req.account._id });
    res.json({ organisations });
  } catch (error) {
    res.status(500).json({ message: 'Something bad happened on the server' });
  }
};

export const UploadOrganisationPhoto = async (req, res) => {
  //rename the file with the name of the organisation and upload it to google drive
  const org = await organisation.findById(req.params.id);

  //get the mimetype and rename it.
  const newFileName = `${org.organisationId}_${Date.now()}.${
    req.file.mimetype.split('/')[1]
  }`;

  console.log(newFileName);
  const filePath = `public/images/${newFileName}`;

  fs.rename(`public/images/${req.file.filename}`, filePath, async () => {});

  async function CreateAndUploadFile(auth) {
    const driveService = google.drive({ version: 'v3', auth });

    let fileMetaData = {
      name: newFileName,
      parents: ['1UFsyKj7RtN8qkJICYEgK9n35Av2D_gLF'],
    };
    let media = {
      mimeType: req.file.mimeType,
      body: fs.createReadStream(filePath),
    };

    // res.json({ title: 'Sucess', message: 'Profile photo uploaded' });

    let response = await driveService.files.create({
      requestBody: fileMetaData,
      media,
      fields: 'id',
    });

    switch (response.status) {
      case 200:
        console.log(response.data.id);
        await organisation.findByIdAndUpdate(req.params.id, {
          profilePhoto: `https://drive.google.com/uc?id=${response.data.id}`,
        });
        res.json({ title: 'Success', message: 'Profile photo uploaded' });
        break;

      default:
        break;
    }
  }

  CreateAndUploadFile(auth).catch((error) => {
    console.log(error);

    res.status(500).json({ message: 'Something terrible happened' });
  });

  fs.unlink(filePath, (err) => {
    if (err) {
      console.log(err);
    }
    console.log('File deleted');
  });
};

export const ViewOrganisation = async (req, res) => {
  try {
    const org = await organisation.findById(req.params.id);
    res.json({ org });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Something bad happened on the server' });
  }
};

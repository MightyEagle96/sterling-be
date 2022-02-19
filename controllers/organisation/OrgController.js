import organisation from '../../models/organisation.js';

export const CreateOrganisation = async (req, res) => {
  try {
    req.body.admin = req.account._id;
    await organisation.create(req.body);
    res.status(201).json({ message: 'New Organisation Created' });
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

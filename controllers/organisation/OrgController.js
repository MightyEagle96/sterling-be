import organisation from '../../models/organisation.js';

export const CreateOrganisation = async (req, res) => {
  try {
    console.log(req.account);
    req.body.admin = req.account._id;
    await organisation.create(req.body);
    res.status(201).json({ message: 'New Organisation Created' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Something bad happened on the server' });
  }
};

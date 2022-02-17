import Account from '../models/account';
import { createAccessToken, sendAccessToken } from './token';

export const CreateAccount = async (req, res) => {
  try {
    const account = await Account.create(req.body);

    const accessToken = createAccessToken({ id: account._id });

    sendAccessToken(account, req, res, accessToken);
  } catch (error) {
    console.error(error);
  }
};

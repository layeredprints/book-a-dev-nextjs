import type { NextApiRequest, NextApiResponse } from 'next';

import Clients from 'src/models/Clients';

export const read = (req: NextApiRequest, res: NextApiResponse): any => {
  const { id } = req.query;

  const result = Clients.find(id ? { id: parseInt(id.toString()) } : undefined);

  if (result) {
    return res.status(200).json(result);
  }

  res.status(500).json({
    message: 'Something went wrong.',
  });
};

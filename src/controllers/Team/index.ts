import type { NextApiRequest, NextApiResponse } from 'next';

import Team from 'src/models/Team';

export const read = (req: NextApiRequest, res: NextApiResponse): any => {
  const { id } = req.query;

  const result = Team.find(id ? { id: parseInt(id.toString()) } : undefined);

  if (result) {
    return res.status(200).json(result);
  }

  res.status(500).json({
    message: 'Something went wrong.',
  });
};

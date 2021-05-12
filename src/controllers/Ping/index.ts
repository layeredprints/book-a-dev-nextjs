import type { NextApiRequest, NextApiResponse } from 'next';

export const ping = (_req: NextApiRequest, res: NextApiResponse): any => {
  res.status(200).json({
    message: 'OK',
  });
};

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { read } from 'src/controllers/Team';
import MethodEnum from 'src/enums/Method';

export default (req: NextApiRequest, res: NextApiResponse): any => {
  const { method } = req;

  if (method === MethodEnum.Get) {
    return read(req, res);
  }

  res.setHeader('Allow', [MethodEnum.Get, MethodEnum.Patch, MethodEnum.Delete]);
  return res.status(405).end(`Method ${method} Not Allowed`);
};

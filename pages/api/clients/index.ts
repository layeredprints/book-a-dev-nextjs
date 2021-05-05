// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { read } from 'src/controllers/Clients';
import MethodEnum from 'src/enums/Method';

export default (req: NextApiRequest, res: NextApiResponse): any => {
  const { method } = req;

  if (method === MethodEnum.Get) {
    return read(req, res);
  }

  res.setHeader('Allow', [MethodEnum.Post]);
  return res.status(405).end(`Method ${method} Not Allowed`);
};
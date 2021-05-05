import { useQuery } from 'react-query';

import MethodEnum from 'src/enums/Method';
import { ClientType } from 'src/types';

export const handleReadClients = async (): Promise<ClientType[]> => {
  const result = await fetch(`/api/clients`, {
    method: MethodEnum.Get,
  });

  return result.json();
};

export const handleReadClient = async (id: number): Promise<ClientType> => {
  const result = await fetch(`/api/clients/${id}`, {
    method: MethodEnum.Get,
  });

  return result.json();
};

export const useClients = (): any => {
  return {
    clients: useQuery(['clients'], handleReadClients),
    handleReadClient: (id: number) =>
      // eslint-disable-next-line react-hooks/rules-of-hooks
      useQuery(['clients', { id }], () => handleReadClient(id)),
  };
};

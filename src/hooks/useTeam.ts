import { useQuery } from 'react-query';

import MethodEnum from 'src/enums/Method';
import { TeamMemberType } from 'src/types';

export const handleReadTeamMembers = async (): Promise<TeamMemberType[]> => {
  const result = await fetch(`/api/team`, {
    method: MethodEnum.Get,
  });

  return result.json();
};

export const handleReadTeamMember = async (
  id: number,
): Promise<TeamMemberType> => {
  const result = await fetch(`/api/team/${id}`, {
    method: MethodEnum.Get,
  });

  return result.json();
};

export const useTeam = (): any => {
  return {
    members: useQuery(['team'], handleReadTeamMembers),
    handleReadTeamMember: (id: number) =>
      // eslint-disable-next-line react-hooks/rules-of-hooks
      useQuery(['team', { id }], () => handleReadTeamMember(id)),
  };
};

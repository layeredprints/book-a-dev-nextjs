// export type SelectOptionType = {
//   id: string;
//   value: string;
//   label: string;
// };

export type InputValueType = string | undefined;

export type InputType = {
  id: string;
  name: string;
  type: string;
  value?: InputValueType;
  isRequired?: boolean;
  label?: string | undefined;
  placeholder?: string;
};

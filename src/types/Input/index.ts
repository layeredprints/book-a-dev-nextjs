export type InputValueType = string | undefined;

export type InputType = {
  name: string;
  value?: InputValueType;
  isRequired?: boolean;
  label?: string | undefined;
  placeholder?: string;
};

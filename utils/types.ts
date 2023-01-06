export type skillType = {
  id: number;
  name: string;
};

export type SkillState = {
  loading: boolean;
  skills: skillType[];
};

export type SidebarTypes = {
  fill: boolean;
  type: string;
  loading: boolean;
  title: string;
  noSkillText?: string;
  skills: skillType[];
  handleSelection(skill: skillType): void;
  removeSelection(skill: skillType): void;
};

export enum operationType {
  select = "SELECT",
  remove = "REMOVE",
}

export type IState = {
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  message: string;
  skills: skillType[];
};

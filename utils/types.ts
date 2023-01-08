export type skillType = {
  id: number;
  name: string;
};

export type SkillState = {
  loading: boolean;
  skills: skillType[];
  skillIds: number[];
  setSkillIds: React.Dispatch<React.SetStateAction<number[]>>;
  setSkillPageDetails: React.Dispatch<React.SetStateAction<PageDetailsType>>
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

export type courseType = {
  id: number;
  name: string;
  url: string;
  thumbnail: string;
  skills: [{ skill: skillType }];
  users?: [];
};

export type PageDetailsType = {
  page: number;
  perPage: number;
  totalCount: number;
  totalPage: number;
};

export type ParamsType = {
  page: number;
  perPage: number;
  totalCount: number;
  totalPage: number;
  ids?: number[];
  user?: string;
};

export type ICourseState = {
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  isSkillLoading: boolean;
  isSkillSuccess: boolean;
  isSkillError: boolean;
  message: string;
  courses: {
    courses: courseType[];
    pageDetails: PageDetailsType;
  };
  skillsCourses: {
    courses: courseType[];
    pageDetails: PageDetailsType;
  };
};

export type courseProps = {
  title: string;
  isLoading: boolean;
  courses: courseType[];
  pageDetails: PageDetailsType;
  handleChange: (page: number) => void;
};

export type CourseCarouselProps = {
  children: React.ReactNode;
  title: string;
  pageDetails: PageDetailsType;
  handlePageChange: (page: number) => void;
};

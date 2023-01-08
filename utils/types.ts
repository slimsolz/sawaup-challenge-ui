export type SkillType = {
  id: number;
  name: string;
};

export type SkillState = {
  loading: boolean;
  skills: SkillType[];
  skillIds: number[];
  setSkillIds: React.Dispatch<React.SetStateAction<number[]>>;
  setSkillPageDetails: React.Dispatch<React.SetStateAction<PageDetailsType>>;
};

export type SidebarTypes = {
  fill: boolean;
  type: string;
  loading: boolean;
  title: string;
  noSkillText?: string;
  skills: SkillType[];
  handleSelection(skill: SkillType): void;
  removeSelection(skill: SkillType): void;
};

export enum OperationType {
  select = "SELECT",
  remove = "REMOVE",
}

export type IState = {
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  message: string;
  skills: SkillType[];
};

export type CourseType = {
  id: number;
  name: string;
  url: string;
  thumbnail: string;
  skills: [{ skill: SkillType }];
  users?: [];
};

export type PageDetailsType = {
  page: number;
  perPage: number;
  totalCount: number;
  totalPage: number;
  user?: string;
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
    courses: CourseType[];
    pageDetails: PageDetailsType;
  };
  skillsCourses: {
    courses: CourseType[];
    pageDetails: PageDetailsType;
  };
  isLikeLoading: boolean;
  isLikeSuccess: boolean;
  isLikeError: boolean;
  liked: Record<string, any>;
};

export type CourseProps = {
  title: string;
  isLoading: boolean;
  courses: CourseType[];
  pageDetails: PageDetailsType;
  handleChange: (page: number) => void;
};

export type CourseCarouselProps = {
  children: React.ReactNode;
  title: string;
  pageDetails: PageDetailsType;
  handlePageChange: (page: number) => void;
};

export type CourseDetailsProps = {
  id: number;
  name: string;
  url: string;
  thumbnail: string;
  skills: { skill: { id: number; name: string } }[];
  users?: Record<string, any>[];
};

export type LikeCourseParams = {
  courseId: number;
  name: string;
};

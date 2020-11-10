export interface List {
  [key: string]: RepoItem[];
}

export interface RepoItem {
  createdDate: string;
  id: number;
  isStarred: boolean;
  modifiedDate: string;
  moduleDescription: string;
  moduleIdentity: string;
  moduleKeyName: string;
  moduleName: string;
  moduleStatus: boolean;
  count: number;
}

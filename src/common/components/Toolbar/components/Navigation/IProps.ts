export interface IProps {
  handleCloseNavMenu: () => void;
  handlePageClick: (page: string) => void;
  selectedPage: null | string;
  setSelectedPage: (page: string) => void;
}

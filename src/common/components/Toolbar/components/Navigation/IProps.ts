export interface IProps {
    handleCloseNavMenu: ()=> void
    handlePageClick: (page: string) => void
    selectedPage: null | string
}
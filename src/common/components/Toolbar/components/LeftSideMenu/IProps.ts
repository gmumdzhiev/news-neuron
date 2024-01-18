export interface IProps {
    anchorElNav: null | HTMLElement
    setAnchorElNav: (anchorElNav: null | HTMLElement) => void
    selectedPage: null | string
    handleCloseNavMenu: () => void
    handlePageClick: (page:string, route:string) => void
}
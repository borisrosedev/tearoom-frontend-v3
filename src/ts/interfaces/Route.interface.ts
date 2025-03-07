import BaseContainer from "../models/Base.container"

export default interface RouteInterface {
    ui: (data:any) => string
    business: BaseContainer
    path: string
}
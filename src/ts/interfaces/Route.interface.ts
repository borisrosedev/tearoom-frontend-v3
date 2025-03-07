import BaseContainer from "../models/BaseContainer"

export default interface RouteInterface {
    ui: (data:any) => string
    business: BaseContainer
    path: string
}
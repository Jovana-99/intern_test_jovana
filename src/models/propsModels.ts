import { IData } from './dataModel'

export interface IViewProps {
    view: boolean
    changeView: () => void
}

export interface ICardsProps {
    data: IData[] | undefined
}

export interface ICardProps {
    promo: IData
}

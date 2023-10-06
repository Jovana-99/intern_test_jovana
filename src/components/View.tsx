import React from 'react'
import { IViewProps } from '../models/propsModels'
import './View.css'

const View = ({ view, changeView }: IViewProps) => {
    const changeViewOnClick = (btn: string): void => {
        if (btn === 'all' && view) {
            changeView()
        } else if (btn === 'new' && !view) {
            changeView()
        }
    }

    return (
        <div className="view-btns">
            <button
                className={'view-btn btn ' + (view ? 'not_active' : 'active')}
                onClick={(): void => changeViewOnClick('all')}
            >
                All Promotions
            </button>
            <button
                className={'view-btn btn ' + (view ? 'active' : 'not_active')}
                onClick={(): void => changeViewOnClick('new')}
            >
                New Customers
            </button>
        </div>
    )
}

export default View

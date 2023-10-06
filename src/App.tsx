import React, { useEffect, useState } from 'react'
import axios from 'axios'
import View from './components/View'
import Cards from './components/Cards'
import { IData } from './models/dataModel.js'
import './App.css'

function App() {
    const [newCustomerView, setnewCustomerView] = useState<boolean>(false)
    const [data, setData] = useState<IData[] | undefined>()

    const changeView = (): void => {
        setnewCustomerView(!newCustomerView)
    }

    useEffect((): void => {
        axios
            .get('https://www.mocky.io/v2/5bc3b9cc30000012007586b7')
            .then((res) => {
                //console.log(res.data);
                if (newCustomerView) {
                    let filteredData: IData[] = res.data
                        .filter(
                            (promo: IData) => promo.onlyNewCustomers === true
                        )
                        .sort((a: IData, b: IData) => {
                            return a.sequence - b.sequence
                        })
                    setData(filteredData)
                } else {
                    res.data.sort((a: IData, b: IData) => {
                        return a.sequence - b.sequence
                    })
                    setData(res.data)
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }, [newCustomerView])

    return (
        <>
            <View view={newCustomerView} changeView={changeView} />
            <Cards data={data} />
        </>
    )
}

export default App

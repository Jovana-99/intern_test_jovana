import './App.css'
import axios from 'axios'
import View from './components/View'
import Cards from './components/Cards'
import { useEffect, useState } from 'react'

function App() {
    const [newCustomerView, setnewCustomerView] = useState(false)
    const [data, setData] = useState()

    const changeView = () => {
        setnewCustomerView(!newCustomerView)
    }

    useEffect(() => {
        axios
            .get('http://www.mocky.io/v2/5bc3b9cc30000012007586b7')
            .then((res) => {
                //console.log(res.data);
                if (newCustomerView) {
                    let filtereData = res.data.filter(
                        (promo) => promo.onlyNewCustomers === true
                    )
                    filtereData.sort((a, b) => {
                        return a.sequence - b.sequence
                    })
                    setData(filtereData)
                } else {
                    res.data.sort((a, b) => {
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
            <Cards view={newCustomerView} data={data} />
        </>
    )
}

export default App

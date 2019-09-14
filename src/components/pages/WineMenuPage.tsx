/**
 * WineMenuPage component
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'
import { IWine } from '../../interfaces/IWine'
import WineMenuPageContents from './contents/WineMenuPageContents'
import WineMenuPageHeader from './header/WineMenuPageHeader'

/**
 * WineMenuPage component
 */
const WineMenuPage: React.FC = () => {
    const [taxRate, setTaxRate] = React.useState(0.0)
    const [wines, setWines] = React.useState<IWine[]>([])
    const [page, setPage] = React.useState('-1')

    React.useEffect(() => {
        const uri = '//anyway-grapes.jp/get_tax_rate.php'
        fetch(uri)
            .then(response => response.json())
            .then(response => setTaxRate(response))
            .catch(error => {
                alert(error.stack)
            })
    }, [])

    return (
        <>
            <WineMenuPageHeader setPage={setPage} setWines={setWines} />
            <WineMenuPageContents page={page} taxRate={taxRate} wines={wines} />
        </>
    )
}

export default WineMenuPage

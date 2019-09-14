/**
 * WineMenuPageContents component
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'
import { IWine } from '../../../interfaces/IWine'

interface IProps {
    taxRate: number
    page: string
    wines: IWine[]
}

/**
 * WineMenuPageContents component
 */
const WineMenuPageContents: React.FC<IProps> = props => {
    const { taxRate, page, wines } = props

    return (
        <div id="contents">
            <p>Page: {page}</p>
            <p>Tax Rate: {taxRate}</p>
            <ul>
                {wines.map((wine: IWine, index: number) => (
                    <li key={index}>{wine.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default React.memo(WineMenuPageContents)

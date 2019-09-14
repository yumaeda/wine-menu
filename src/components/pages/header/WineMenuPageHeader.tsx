/**
 * WineMenuPageHeader component
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'
import { IWine } from '../../../interfaces/IWine'
import MenuSelect from '../contents/MenuSelect'

interface IProps {
    setPage: (page: string) => void
    setWines: (wines: IWine[]) => void
}

/**
 * WineMenuPageHeader component
 */
const WineMenuPageHeader: React.FC<IProps> = props => {
    const { setPage, setWines } = props

    const handleChange = (event: React.FormEvent<HTMLSelectElement>) => {
        const page = event.currentTarget.value
        setPage(page)

        const uri = `http://localhost:3000/wines?page_number=${page}`
        fetch(uri)
            .then(response => response.json())
            .then(response => setWines(response))
            .catch(error => {
                alert(error.stack)
            })
    }

    return (
        <header>
            <a href="http://sei-ya.jp/admin_home.html">
                <img
                    className="home__button"
                    src="//anyway-grapes.jp/images/adminHome.png"
                />
            </a>
            <div>
                <MenuSelect onChange={handleChange} />
            </div>
        </header>
    )
}

export default WineMenuPageHeader

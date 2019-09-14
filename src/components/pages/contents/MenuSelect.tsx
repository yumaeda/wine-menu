/**
 * MenuSelect component
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'
import { IOption } from '../../../interfaces/IOption'
import Select from '../../common/Select'

/**
 * Payment method options
 */
const options: IOption[] = [
    { text: 'ページを選択してください。', value: '-1' },
    { text: 'ショップ価格', value: '999' },
    { text: 'レストラン価格', value: '1001' }
]

/**
 * Interface for props
 */
interface IProps {
    onChange: (event: React.FormEvent<HTMLSelectElement>) => void
}

/**
 * PaymentSelect component
 */
const MenuSelect: React.FC<IProps> = props => {
    const { onChange } = props

    return <Select options={options} onChange={onChange} />
}

export default React.memo(MenuSelect)

import { FC, useState } from 'react'
import Dropdown from '../components/Dropdown'

type option = {
	label: string,
	id: string | number,
	value: any
}

const IndexPage: FC = () => {
	const [ value, setValue ] = useState<Array<option>>([])
	const [ value2, setValue2 ] = useState<Array<option>>([])

	const options = [
		{
			label: 'Oliver Hansen',
			id: 1,
			value: 'Oliver Hansen'
		},
		{
			label: 'Van Henry',
			id: 2,
			value: 'Van Henry'
		},
		{
			label: 'April Tucker',
			id: 3,
			value: 'April Tucker'
		},
		{
			label: 'John Smith',
			id: 4,
			value: 'John Smith'
		},
		{
			label: 'John Wick',
			id: 5,
			value: 'John Wick'
		},
		{
			label: 'Bruce Wayne',
			id: 6,
			value: 'Bruce Wayne'
		},
		{
			label: 'Jerry Ku',
			id: 7,
			value: 'Jerry Ku'
		}
	]

	console.log(value)

	return (
		<main>
			<div className='container'>
				<h1>Dropdown Examples</h1>

				<Dropdown label='Multi Select' options={options} value={value} onChange={setValue} multiSelect/>
				<Dropdown label='Select' options={options} value={value2} onChange={setValue2}/>
			</div>
		</main>
	)
}

export default IndexPage

import React from 'react'

type option = {
	label: string,
	id: string | number,
	value: string
}

export type Props = {
	label: string
	options: Array<option>
	value: Array<option>
	onChange: React.Dispatch<React.SetStateAction<option[]>>
	multiSelect?: boolean
}

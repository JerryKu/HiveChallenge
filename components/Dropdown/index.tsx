import * as Spec from './spec'
import { useEffect, useState } from 'react'

const Dropdown: React.FunctionComponent<Spec.Props> = ({ label, options, value, onChange, multiSelect }) => {
	const [ open, toggleOpen ] = useState(false)
	const [ selectedOptions, setSelectedOptions ] = useState(new Set())

	useEffect(() => {
		onChange(options.filter(option => selectedOptions.has(option.id)))
	},[ selectedOptions ])

	// Toggle All for Multi Select
	const toggleSelectAll = () => {
		if (options.length !== selectedOptions.size) {
			setSelectedOptions(new Set(options.map(option => option.id)))
		} else {
			setSelectedOptions(new Set())
		}
	}

	// Multi Select Method
	const toggleOption = (id: string | number) => {
		const newSelectedOptions = selectedOptions
		if (newSelectedOptions.has(id)) {
			newSelectedOptions.delete(id)
		} else {
			newSelectedOptions.add(id)
		}
		setSelectedOptions(new Set([ ...newSelectedOptions ]))
	}

	// Single Select Method
	const onSelect = (id: string | number) => {
		setSelectedOptions(new Set([ id ]))
	}

	const arrow = open ? <div className='arrow'>&#x25B2;</div> : <div className='arrow'>&#x25BC;</div>

	const displayValue = value.length ? value.map((val) => val.label).join(', ') : 'None'

	// Single Select
	if (!multiSelect) {
		return (
			<div className='dropdown-container'>
				<h2>{label}</h2>
				<div className='selected-options' onClick={() => toggleOpen(!open)}>{displayValue} {arrow}</div>
				<div className={`dropdown-options${open ? ' show' : ''}`}>
					<div onClick={() => setSelectedOptions(new Set())}>None</div>
					{options.map((option) => {
						return <div className={`dropdown-option${selectedOptions.has(option.id) ? ' selected' : ''}`} onClick={() => onSelect(option.id)} key={option.id}>{option.label}</div>
					})}
				</div>
			</div>
		)
	}

	// Multi Select
	return (
		<div className='dropdown-container'>
			<h2>{label}</h2>
			<div className='selected-options' onClick={() => toggleOpen(!open)}>{displayValue} {arrow}</div>
			<div className={`dropdown-options${open ? ' show' : ''}`}>
				<div onClick={toggleSelectAll}>Select/Deselect All</div>
				{options.map((option) => {
					return <div className={`dropdown-option${selectedOptions.has(option.id) ? ' selected' : ''}`} onClick={() => toggleOption(option.id)} key={option.id}><input type='checkbox' readOnly checked={selectedOptions.has(option.id)}/> {option.label}</div>
				})}
			</div>
		</div>
	)
}

export default Dropdown 

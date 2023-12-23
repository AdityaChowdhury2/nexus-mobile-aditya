import { useEffect, useState } from 'react';
import RangeSlider from 'react-range-slider-input';
import { useSearchParams } from 'react-router-dom';
import qs from 'query-string';

const PriceFilter = () => {
	const [params, setParams] = useSearchParams();
	const [range, setRange] = useState({
		minValue: 500,
		maxValue: 1500,
	});

	const handleChange = value => {
		setRange({ ...range, minValue: value[0], maxValue: value[1] });
	};

	useEffect(() => {
		let currentQuery = {};
		if (params.size) {
			currentQuery = qs.parse(params.toString());
		}
		setParams({
			...currentQuery,
			minPrice: range.minValue,
			maxPrice: range.maxValue,
		});
	}, [range, params, setParams]);
	return (
		<div className="">
			<h5 className="text-xl ">Price</h5>
			<p className="my-2">{range.minValue + ' - ' + range.maxValue}</p>
			<div className="w-full mx-auto">
				<RangeSlider
					min={0}
					max={1500}
					step={100}
					defaultValue={[range.minValue, range.maxValue]}
					onInput={handleChange}
				/>
			</div>
		</div>
	);
};

export default PriceFilter;

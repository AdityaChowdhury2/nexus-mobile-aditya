import { useState } from 'react';

import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';

import BrandFIlter from './BrandFilter/BrandFilter';
import OSFilter from './OSFilter/OSFilter';
import RamFilter from './RamFilter/RamFilter';

const FilterSidebar = () => {
	const [range, setRange] = useState({
		minValue: 10000,
		maxValue: 50000,
	});

	return (
		<div className="w-5/12 lg:w-2/12 p-3">
			<h3 className="text-xl">Filter Products</h3>
			<div className="space-y-4">
				<div className="">
					<h5 className="text-xl ">Price</h5>
					<p className="my-2">{range.minValue + ' - ' + range.maxValue}</p>
					<div className="w-full mx-auto">
						<RangeSlider
							min={1000}
							max={50000}
							step={1000}
							defaultValue={[range.minValue, range.maxValue]}
							onInput={value => {
								setRange({ ...range, minValue: value[0], maxValue: value[1] });
							}}
						/>
					</div>
				</div>
				<BrandFIlter />
				<RamFilter />
				<OSFilter />
				<div>
					<h5 className="text-xl ">Processor</h5>
					<ul className="h-36 overflow-y-auto space-y-2 border [&>*:last-child]:border-none">
						<li className="flex gap-2 items-center py-1 px-1 border-b-2">
							<input
								type="checkbox"
								name="Google"
								className="checkbox checkbox-xs"
								onChange={e => {
									console.log(e.target.checked, e.target.name);
								}}
							/>
							Google
						</li>
						<li className="flex gap-2 items-center py-1 px-1 border-b-2">
							<input
								type="checkbox"
								name="Google"
								className="checkbox checkbox-xs"
								onChange={e => {
									console.log(e.target.checked, e.target.name);
								}}
							/>
							Google
						</li>
						<li className="flex gap-2 items-center py-1 px-1 border-b-2">
							<input
								type="checkbox"
								name="Google"
								className="checkbox checkbox-xs"
								onChange={e => {
									console.log(e.target.checked, e.target.name);
								}}
							/>
							Google
						</li>
						<li className="flex gap-2 items-center py-1 px-1 border-b-2">
							<input
								type="checkbox"
								name="Google"
								className="checkbox checkbox-xs"
								onChange={e => {
									console.log(e.target.checked, e.target.name);
								}}
							/>
							Google
						</li>
						<li className="flex gap-2 items-center py-1 px-1 border-b-2">
							<input
								type="checkbox"
								name="Google"
								className="checkbox checkbox-xs"
								onChange={e => {
									console.log(e.target.checked, e.target.name);
								}}
							/>
							Google
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default FilterSidebar;

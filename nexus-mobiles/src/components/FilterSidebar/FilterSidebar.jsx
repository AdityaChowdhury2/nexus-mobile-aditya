import 'react-range-slider-input/dist/style.css';

import BrandFIlter from './BrandFilter/BrandFilter';
import OSFilter from './OSFilter/OSFilter';
import RamFilter from './RamFilter/RamFilter';
import PriceFilter from './PriceFilter/PriceFilter';

const FilterSidebar = () => {
	return (
		<div className="w-5/12 lg:w-2/12 p-3">
			<h3 className="text-xl">Filter Products</h3>
			<div className="space-y-4">
				<PriceFilter />
				<BrandFIlter />
				<RamFilter />
				<OSFilter />
				<div>
					<h5 className="text-xl ">
						Processor{' '}
						<span className="text-red-900 font-bold text-sm">(Static)</span>
					</h5>
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

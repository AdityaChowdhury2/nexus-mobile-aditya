// import { useSearchParams } from 'react-router-dom';
import FilterSidebar from '../FilterSidebar/FilterSidebar';
import Products from '../Products/Products';
// import useGetProducts from '../../hooks/useGetProducts';

const Shop = () => {
	return (
		<section className="xl:container">
			<h1 className="text-center font-bold text-3xl">All Mobiles</h1>
			<div className="flex">
				<FilterSidebar />
				<Products />
			</div>
		</section>
	);
};

export default Shop;

import useGetProducts from '../../hooks/useGetProducts';

const Products = () => {
	const { mobiles } = useGetProducts();
	return (
		<div className="w-full">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
				{mobiles?.map(item => {
					return (
						<div key={item._id} className="p-4 w-full border rounded-lg">
							<a className="block relative h-48 rounded overflow-hidden">
								<img
									alt="ecommerce"
									className="object-cover object-center w-full h-full block"
									src={item.thumbnail}
								/>
							</a>
							<div className="mt-4">
								<h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
									{item.brand}
								</h3>
								<h2 className="text-gray-900 title-font text-lg font-medium">
									{item.title}
								</h2>
								<p className="mt-1">${item.price}</p>
								<button></button>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Products;

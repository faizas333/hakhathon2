import { useRouter } from 'next/router';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';

const CategoryPage = () => {
  const { query } = useRouter();
  const { name } = query;

  const categoryProducts = [
    { id: 1, name: 'T-Shirt', price: 20, imageUrl: '/images/product1.jpg' },
    { id: 2, name: 'Jacket', price: 50, imageUrl: '/images/product2.jpg' },
  ];

  return (
    <>
      <Navbar />
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-6">Category: {name}</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {categoryProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              imageUrl={product.imageUrl}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CategoryPage;
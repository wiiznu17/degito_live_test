import FoodCard from '../components/FoodCard';
import { getFoods } from '../lib/api';

export default async function Home() {
  // คำแนะนำ: fetch รายการอาหารจาก ${API_URL}/api/foods
  let foods = [];
  try {
    foods = await getFoods();
  } catch (error) {
    console.error('Fetch error:', error);
  }
  return (
    <main>
      <h1>Food Menu</h1>
      <div className="grid">{/* คำแนะนำ: นำ foods มา map ด้วย <FoodCard /> */}
        {foods.map((food) => (
          <FoodCard
            key={food.id}
            image={food.image}
            imageAlt={food.image_alt}
            title={food.title}
            description={food.description}
            badge={food.badge}
          />
        ))}
      </div>
    </main>
  );
}

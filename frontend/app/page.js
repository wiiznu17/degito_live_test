import FoodCard from '../components/FoodCard';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

export default async function Home() {
  // คำแนะนำ: fetch รายการอาหารจาก ${API_URL}/api/foods

  return (
    <main>
      <h1>Food Menu</h1>
      <div className="grid">{/* คำแนะนำ: นำ foods มา map ด้วย <FoodCard /> */}</div>
    </main>
  );
}

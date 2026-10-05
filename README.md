## ภาพรวม
แบบทดสอบ food-menu ประกอบด้วย Express API ที่เชื่อมต่อกับ
PostgreSQL และหน้าเว็บ Next.js ที่ดึงข้อมูลจาก API มาแสดงเป็นการ์ดอาหาร

#### สิ่งที่เตรียมให้
1. postgresql (docker)
2. seeder data
3. database schema **food**
   - id
   - title
   - description
   - badge
   - image
   - image_alt
   - created_at
4. UI Figma: https://www.figma.com/design/Wo20yWBhX9kGekwdA1DMoz/DEV-Test?node-id=3-642&m=dev

#### เงื่อนไข
1. การแสดงผลรูปภาพ ต้องแนบ alt 
2. title แสดงไม่เกิน 1 บรรทัด
3. description แสดงไม่เกิน 2 บรรทัด
4. หน้าเว็บต้อง responsive

#### เริ่มต้นการใช้งาน
1. รัน PostgreSQL ด้วย docker compose พร้อมสร้างข้อมูล
   ```bash
   docker compose up -d
   ```

2. รัน backend
   ```bash
   cd backend
   cp .env.example .env
   npm install
   npm run dev
   ```

3. รัน frontend
   ```bash
   cd frontend
   cp .env.example .env
   npm install
   npm run dev
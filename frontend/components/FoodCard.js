export default function FoodCard({ image, imageAlt, title, description, badge }) {
  // คำแนะนำ: render การ์ดที่ประกอบด้วย
  // - รูปภาพ (ใช้ image และ imageAlt)
  // - title ตัดให้แสดงแค่ 1 บรรทัด
  // - description ตัดให้แสดงไม่เกิน 2 บรรทัด
  // - แสดง badge (ถ้ามี) เมื่อ `badge` เป็น true

  return (
    <div className="card">
      <div className="image-wrapper">
        <img
          src={image}
          alt={imageAlt}
          className="card-image"
        />
        {badge &&
          <span className="badge">New</span>}
      </div>
      <div className="card-content">
        <h2 className="card-title" title={title}>
          {title}
        </h2>
        <p className="card-description" title={description}>
          {description}
        </p>
      </div>

    </div>
  );
}

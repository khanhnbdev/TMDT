export default function HomeServices() {
  const items = [
    ["🚚", "FREE AND FAST DELIVERY", "Free delivery for all orders over $140"],
    ["☎", "24/7 CUSTOMER SERVICE", "Friendly 24/7 customer support"],
    ["✓", "MONEY BACK GUARANTEE", "We return money within 30 days"],
  ];
  return (
    <div className="services">
      {items.map(([icon, title, subtitle]) => (
        <div className="service" key={title}>
          <div className="service-icon">{icon}</div>
          <strong>{title}</strong>
          <span>{subtitle}</span>
        </div>
      ))}
    </div>
  );
}

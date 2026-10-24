export default function WishlistBadge({ count }: { count: number }) {
  if (count === 0) return null;

  return (
    <span
      className="wishlist-count"
      role="status"
      aria-label={`${count} products in wishlist`}
    >
      {count > 99 ? "99+" : count}
    </span>
  );
}

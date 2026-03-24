const ProductSkeleton = () => (
  <div className="animate-pulse">
    <div className="aspect-[3/4] rounded-2xl bg-muted relative overflow-hidden">
      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-background/50 to-transparent animate-shimmer" />
    </div>
    <div className="p-4 space-y-2">
      <div className="h-3 bg-muted rounded w-16" />
      <div className="h-4 bg-muted rounded w-3/4" />
      <div className="h-4 bg-muted rounded w-1/3" />
    </div>
  </div>
);

export default ProductSkeleton;

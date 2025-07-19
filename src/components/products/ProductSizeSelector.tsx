import type { FC } from 'react';

interface ProductSizeSelectorProps {
  sizes: Record<string, number>;
  onSelect: (size: string) => void;
  selectedSize: string | null;
}

const ProductSizeSelector: FC<ProductSizeSelectorProps> = ({
  sizes,
  selectedSize,
  onSelect,
}) => {
  return (
    <div className="flex flex-wrap gap-3 text-light-black">
      {Object.entries(sizes).map(([size, isAvailable]) => (
        <button
          key={size}
          disabled={!isAvailable}
          onClick={() => onSelect(size)}
          className={`${
            !isAvailable
              ? 'cursor-not-allowed opacity-50'
              : selectedSize === size
                ? 'text-black underline underline-offset-2'
                : 'hover:text-black'
          }`}
        >
          {size}
        </button>
      ))}
    </div>
  );
};

export { ProductSizeSelector };

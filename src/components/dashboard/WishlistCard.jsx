import { Card, Button } from "@heroui/react";
import { DollarSign } from "lucide-react";
import Link from "next/link";
import { FcRight } from "react-icons/fc";
import { DeleteButton } from "./DeleteButton";

export const WishlistCard = ({ item }) => {
  return (
    <Card className="sm:w-[250px] p-4 gap-3 bg-zinc-900 border border-zinc-800 shadow-none">
      <img
        alt={item.productTitle}
        className="pointer-events-none aspect-square w-full rounded-xl object-cover select-none"
        src={item.productImage}
      />
      <div className="px-0">
        <h3 className="font-bold text-zinc-100 truncate">{item.productTitle}</h3>
        <p className="text-sm text-emerald-500 font-bold flex items-center gap-1 mt-1">
          <DollarSign size={14} /> {item.productPrice.toLocaleString()}
        </p>
      </div>

      <Link href={`/products/${item.productId}`}>
        <Button 
          color="primary" 
          variant="flat" 
          size="sm" 
          className="rounded-lg w-full"
        >
          <FcRight /> Go to details
        </Button>
      </Link>

      {/* The client-side interaction lives here */}
      <DeleteButton productId={item.productId} />
    </Card>
  );
};
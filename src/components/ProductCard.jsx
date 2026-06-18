"use client";

import { useEffect, useState } from "react";
import { Avatar, Button, Card } from "@heroui/react";
import { DollarSign, Tag, User, Eye, Heart } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { addWishList } from "@/lib/actions/wishlist";
import { authClient } from "@/lib/auth-client";
import { getWishlist } from "@/lib/api/wishlist";
import toast from "react-hot-toast";

export const ProductCard = ({ product }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  
  useEffect(() => {
  const checkLikeStatus = async () => {
    const { data: session } = await authClient.token();
    if (session?.token) {
      const list = await getWishlist(session.token);
      // Check if this specific product is in the user's wishlist
      const isAlreadyLiked = list.some(item => item.productId === product._id);
      setIsLiked(isAlreadyLiked);
    }
  };
  checkLikeStatus();
}, [product._id]);

  // console.log("My wishlishts here : ", getMyWishlists())
  
  const handleLike = async () => {
    // 1. Set loading state to prevent double-clicks
    
    const { data: session } = await authClient.token()
    const token = session?.token
    // console.log(session?.token , ' token ')

    setIsLoading(true);
    
    // 2. Optimistic UI update
    setIsLiked((prev) => !prev);

    // 3. Prepare payload
    const productData = {
      productId: product._id,
      productTitle: product.title,
      productImage: product.images?.[0],
      productPrice: product.price,
    };

    try {
      // 4. Call Server Action
      const res = await addWishList(productData , token);
      res.inserted ? toast.success("wish list added") : toast.error("Wishlist was removed!")
      console.log("Wishlist response:", res);
    } catch (error) {
      console.error("Failed to update wishlist:", error);
      // Revert if error occurs
      setIsLiked((prev) => !prev);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
      <Card className="relative flex flex-col gap-3 p-4 w-full rounded-2xl bg-zinc-900 border border-zinc-800 shadow-none">
        {/* Image Section */}
        <div className="relative overflow-hidden h-52 rounded-lg bg-violet-900">
          <img
            src={product.images?.[0] || "/placeholder.png"}
            alt={product.title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />

          {/* Category Badge */}
          <div className="absolute top-3 left-3 flex items-center gap-1 rounded-md bg-black/40 px-2 py-1 text-[11px] text-zinc-100 backdrop-blur">
            <Tag size={12} />
            {product.category || "General"}
          </div>

          {/* Like Button */}
          <button
            disabled={isLoading}
            onClick={handleLike}
            className="absolute top-3 right-3 flex items-center justify-center h-9 w-9 rounded-full bg-black/40 backdrop-blur transition-transform hover:scale-110 disabled:opacity-50"
          >
            <Heart
              size={18}
              className={isLiked ? "fill-red-500 text-red-500" : "text-zinc-300"}
            />
          </button>
        </div>

        {/* Content Section */}
        <div>
          <h3 className="truncate text-lg font-semibold text-zinc-100">{product.title}</h3>
          <p className="mt-1 line-clamp-2 text-sm text-zinc-400">{product.description}</p>
        </div>

        {/* Tags Section */}
        <div>
          <span className="text-black bg-yellow-300 p-1 text-[10px] uppercase font-bold">Category</span>
          <div className="mt-2 flex flex-wrap gap-2">
            <div className="px-3 py-2 text-xs rounded-md bg-zinc-800 border-2 border-zinc-800 text-zinc-200">
              {product.category || "General"}
            </div>
            <div className="px-3 py-2 text-xs rounded-md bg-zinc-800 border-2 border-zinc-800 text-zinc-200">
              Product
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <div className="flex items-center justify-between mt-auto pt-2">
          <div className="flex items-center font-bold text-2xl text-zinc-100">
            <DollarSign size={20} />
            {product.price?.toLocaleString()}
          </div>
          
          <Link href={`/products/${product._id}`}>
            <Button variant="solid" className="rounded-none bg-red-600 text-white hover:bg-red-700">
              <Eye size={16} /> View
            </Button>
          </Link>
        </div>

        {/* Seller Info */}
        <div className="flex items-center gap-2 pt-2 border-t border-zinc-800">
          <Avatar className="size-8 bg-zinc-700 text-zinc-200">
            <Avatar.Fallback>{product.sellerInfo?.name?.charAt(0) || "S"}</Avatar.Fallback>
          </Avatar>
          <div className="flex items-center gap-1 text-xs text-zinc-400">
            <User size={12} />
            {product.sellerInfo?.name}
          </div>
        </div>
      </Card>
    </motion.div>
  );
};
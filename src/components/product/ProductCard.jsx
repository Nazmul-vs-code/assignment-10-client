"use client";

import { useEffect, useState } from "react";

import { Avatar } from "@heroui/react";
import "./ProductCard.css";

import {
  DollarSign,
  Tag,
  Heart,
  ArrowUpRight,
} from "lucide-react";

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

        const isAlreadyLiked = list.some(
          (item) => item.productId === product._id
        );

        setIsLiked(isAlreadyLiked);
      }
    };

    checkLikeStatus();
  }, [product._id]);

  const handleLike = async () => {
    const { data: session } = await authClient.token();

    const token = session?.token;

    if (!token) {
      toast.error("Please login to use wishlist");
      return;
    }

    setIsLoading(true);
    setIsLiked((prev) => !prev);

    const productData = {
      productId: product._id,
      productTitle: product.title,
      productImage: product.images?.[0],
      productPrice: product.price,
      productCategory: product.category,
    };

    try {
      const res = await addWishList(productData, token);

      res.inserted
        ? toast.success("Wishlist added")
        : toast.error("Wishlist was removed!");
    } catch (error) {
      console.error("Failed to update wishlist:", error);

      setIsLiked((prev) => !prev);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="product-card-parent">
      <article className="product-card">
        {/* Ambient glow */}
        <div className="product-card-glow" />

        {/* Glass surface */}
        <div className="product-card-glass" />

        {/* Decorative 3D circles */}
        <div className="product-card-orbit">
          <span className="product-circle product-circle-1" />
          <span className="product-circle product-circle-2" />
          <span className="product-circle product-circle-3" />
          <span className="product-circle product-circle-4" />

          <span className="product-price-orb">
            <DollarSign size={15} strokeWidth={2.5} />
          </span>
        </div>

        {/* Main content */}
        <div className="product-card-content">
          {/* Product image */}
          <div className="product-image-wrapper">
            <img
              src={product.images?.[0] || "/placeholder.png"}
              alt={product.title}
              className="product-image"
            />

            <div className="product-image-overlay" />

            {/* Category */}
            <div className="product-category">
              <Tag size={11} strokeWidth={2.5} />
              <span>
                {product.category || "General"}
              </span>
            </div>

            {/* Wishlist */}
            <button
              type="button"
              disabled={isLoading}
              onClick={handleLike}
              className={`product-wishlist ${
                isLiked ? "product-wishlist-active" : ""
              }`}
              aria-label="Add to wishlist"
            >
              <Heart
                size={16}
                strokeWidth={2.2}
                fill={isLiked ? "currentColor" : "none"}
              />
            </button>
          </div>

          {/* Product information */}
          <div className="product-card-info">
            <h3 className="product-card-title">
              {product.title}
            </h3>

            <p className="product-card-description">
              {product.description}
            </p>
          </div>

          {/* Footer */}
          <div className="product-card-footer">
            {/* Seller */}
            <div className="product-seller">
              <Avatar className="product-seller-avatar">
                <Avatar.Fallback>
                  {product.sellerInfo?.name?.charAt(0) || "S"}
                </Avatar.Fallback>
              </Avatar>

              <span className="product-seller-name">
                {product.sellerInfo?.name || "Seller"}
              </span>
            </div>

            {/* View */}
            <Link
              href={`/products/${product._id}`}
              className="product-view-button"
            >
              <span>View</span>

              <span className="product-view-icon">
                <ArrowUpRight size={15} />
              </span>
            </Link>
          </div>
        </div>

        {/* Bottom reflection */}
        <div className="product-card-reflection" />
      </article>
    </div>
  );
};
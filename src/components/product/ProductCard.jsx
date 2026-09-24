"use client";

import { useEffect, useState } from "react";
import { Avatar, Button } from "@heroui/react";
import { Heart, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { addWishList } from "@/lib/actions/wishlist";
import { authClient } from "@/lib/auth-client";
import { getWishlist } from "@/lib/api/wishlist";
import toast from "react-hot-toast";

import "./ProductCard.css";

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
        <article className="product-card">
            {/* Product Image */}
            <div className="product-card-image">
                <img
                    src={product.images?.[0] || "/placeholder.png"}
                    alt={product.title}
                />

                {/* Category */}
                <span className="product-card-category">
                    {product.category || "General"}
                </span>

                {/* Wishlist */}
                <button
                    type="button"
                    disabled={isLoading}
                    onClick={handleLike}
                    className={`product-card-wishlist ${
                        isLiked ? "is-liked" : ""
                    }`}
                    aria-label="Add to wishlist"
                >
                    <Heart
                        size={17}
                        strokeWidth={2}
                        fill={isLiked ? "currentColor" : "none"}
                    />
                </button>
            </div>

            {/* Content */}
            <div className="product-card-content">
                <h3 className="product-card-title">
                    {product.title}
                </h3>

                <div className="product-card-bottom">
                    {/* Price */}
                    <div className="product-card-price">
                        <span>Price</span>

                        <strong>
                            {product.price} USD
                        </strong>
                    </div>

                    {/* CTA */}
                    <button>
                    <Link
                        href={`/products/${product._id}`}
                        className="text-red-500"
                    >
                        Buy Now

                    </Link>
                        <ArrowUpRight className="text-red-500" size={16} />
                    </button>
                </div>

                {/* Seller */}
                <div className="product-card-seller">
                    <Avatar className="product-card-avatar">
                        <Avatar.Fallback>
                            {product.sellerInfo?.name?.charAt(0) || "S"}
                        </Avatar.Fallback>
                    </Avatar>

                    <span>
                        {product.sellerInfo?.name || "Seller"}
                    </span>
                </div>
            </div>
        </article>
    );
};
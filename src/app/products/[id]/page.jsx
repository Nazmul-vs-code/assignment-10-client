"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@heroui/react";
import {
  DollarSign,
  Tag,
  ShoppingCart,
  User,
  Phone,
  Mail,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { getProductById } from "@/lib/api/products";

const ProductDetailsPage = ({ params }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const resolvedParams = await params;
      const data = await getProductById(resolvedParams.id);
      setProduct(data);
    };

    fetchProduct();
  }, [params]);

  if (!product) {
    return (
      <div className="flex items-center justify-center min-h-[70vh]">
        <p className="text-lg text-neutral-500">
          Loading product details...
        </p>
      </div>
    );
  }

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-[90%] max-w-7xl mx-auto py-10"
    >
      <div
        className="
          overflow-hidden
          rounded-[32px]
          border
          border-neutral-200
          bg-white
          shadow-xl
          grid
          grid-cols-1
          lg:grid-cols-[60%_40%]
        "
      >
        {/* Left Section */}
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="
            relative
            bg-slate-100
            min-h-[700px]
            flex
            items-center
            justify-center
            p-10
          "
        >
          <button
            className="
              absolute
              left-6
              top-1/2
              -translate-y-1/2
              h-12
              w-12
              rounded-full
              bg-white
              shadow-md
              flex
              items-center
              justify-center
              text-neutral-500
            "
          >
            <ChevronLeft />
          </button>

          <img
            src={product.images?.[0]}
            alt={product.title}
            className="
              max-h-[550px]
              object-contain
              transition-transform
              duration-500
              hover:scale-105
            "
          />

          <button
            className="
              absolute
              right-6
              top-1/2
              -translate-y-1/2
              h-12
              w-12
              rounded-full
              bg-white
              shadow-md
              flex
              items-center
              justify-center
              text-neutral-500
            "
          >
            <ChevronRight />
          </button>
        </motion.div>

        {/* Right Section */}
        <motion.div
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="p-10 lg:p-12 flex flex-col"
        >
          {/* Category */}
          <div
            className="
              inline-flex
              items-center
              gap-2
              text-red-500
              font-semibold
              uppercase
              tracking-widest
              text-sm
            "
          >
            <Tag size={16} />
            {product.category}
          </div>

          {/* Title */}
          <h1 className="mt-4 text-4xl lg:text-5xl font-black leading-tight text-neutral-800">
            {product.title}
          </h1>

          {/* Description */}
          <div className="mt-8">
            <h3 className="text-xs uppercase tracking-widest text-neutral-400 mb-3">
              Description
            </h3>

            <p className="text-neutral-600 leading-8">
              {product.description}
            </p>
          </div>

          {/* Divider */}
          <div className="my-8 border-t border-neutral-200" />

          {/* Price */}
          <div>
            <p className="text-xs uppercase tracking-widest text-neutral-400 mb-2">
              Price
            </p>

            <div className="flex items-center gap-2">
              <DollarSign
                size={32}
                className="text-emerald-500"
              />

              <span className="text-5xl font-black text-neutral-800">
                {product.price?.toLocaleString()}
              </span>
            </div>
          </div>

          {/* Seller Info */}
          <div
            className="
              mt-8
              rounded-2xl
              border
              border-neutral-200
              bg-neutral-50
              p-6
            "
          >
            <div className="flex items-center gap-2 mb-5">
              <User size={18} className="text-red-500" />

              <h3 className="font-semibold text-neutral-800">
                Seller Information
              </h3>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                  <User
                    size={18}
                    className="text-red-500"
                  />
                </div>

                <div>
                  <p className="text-xs text-neutral-400">
                    Seller Name
                  </p>

                  <p className="font-semibold text-neutral-800">
                    {product.sellerInfo?.name}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail
                  size={18}
                  className="text-blue-500"
                />

                <span className="text-neutral-700">
                  {product.sellerInfo?.email}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone
                  size={18}
                  className="text-green-500"
                />

                <span className="text-neutral-700">
                  {product.sellerInfo?.phone}
                </span>
              </div>
            </div>
          </div>

          {/* CTA */}

          <form 

            action={`/api/payment`}
            method="POST"
          >
            
          <input type="hidden" name="productPrice" value={product?.price} />
          <input type="hidden" name="productId" value={product?._id} />
          <input type="hidden" name="authorId" value={product?.sellerInfo?.userId} />


          <Button
            variant="primary"
            className="
          
            rounded-none w-full
            "
            type="submit"
            >
            <ShoppingCart size={20} />
            ADD TO CART
          </Button>
            </form>
        </motion.div>
      </div>
    </motion.main>
  );
};

export default ProductDetailsPage;
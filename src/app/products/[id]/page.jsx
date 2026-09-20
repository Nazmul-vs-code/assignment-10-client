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
  Sparkles,
} from "lucide-react";

import { getProductById } from "@/lib/api/products";
import "./ProductDetail.css";

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
      <main className="product-detail-loading">
        <motion.div
          className="product-loading-orb"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Loading product details...
        </motion.p>
      </main>
    );
  }

  return (
    <motion.main
      className="product-detail-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      {/* Background atmosphere */}

      <div className="product-detail-glow product-detail-glow-one" />
      <div className="product-detail-glow product-detail-glow-two" />

      <motion.div
        className="product-detail-container"
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {/* =====================================================
            IMAGE SECTION
        ===================================================== */}

        <motion.section
          className="product-detail-gallery"
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="gallery-top-line">
            <span>
              <Sparkles size={14} />
              Premium Listing
            </span>

            <span className="gallery-number">01 / 01</span>
          </div>

          {/* Decorative liquid balls */}

          <motion.div
            className="gallery-orb gallery-orb-one"
            animate={{
              y: [0, -18, 0],
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.div
            className="gallery-orb gallery-orb-two"
            animate={{
              y: [0, 15, 0],
              x: [0, 8, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />

          {/* Main image */}

          <motion.div
            className="product-image-wrapper"
            whileHover={{
              scale: 1.025,
            }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
          >
            <div className="product-image-shine" />

            <img
              src={product.images?.[0]}
              alt={product.title}
              className="product-detail-image"
            />
          </motion.div>

          {/* Navigation */}

          <motion.button
            type="button"
            className="gallery-nav gallery-nav-left"
            whileHover={{ x: -3 }}
            whileTap={{ scale: 0.92 }}
          >
            <ChevronLeft size={21} />
          </motion.button>

          <motion.button
            type="button"
            className="gallery-nav gallery-nav-right"
            whileHover={{ x: 3 }}
            whileTap={{ scale: 0.92 }}
          >
            <ChevronRight size={21} />
          </motion.button>

          <div className="gallery-bottom-line">
            <span>Authentic marketplace listing</span>

            <span className="gallery-status">
              <span />
              Available
            </span>
          </div>
        </motion.section>

        {/* =====================================================
            INFORMATION SECTION
        ===================================================== */}

        <motion.section
          className="product-detail-info"
          initial={{ x: 60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {/* Category */}

          <motion.div
            className="product-category"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Tag size={15} />
            {product.category}
          </motion.div>

          {/* Title */}

          <motion.h1
            className="product-detail-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
          >
            {product.title}
          </motion.h1>

          {/* Description */}

          <motion.div
            className="product-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <span className="product-section-label">Description</span>

            <p>{product.description}</p>
          </motion.div>

          {/* Price */}

          <motion.div
            className="product-price-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
          >
            <span className="product-section-label">Current Price</span>

            <div className="product-price">
              <DollarSign size={28} />

              <span>{product.price?.toLocaleString()}</span>
            </div>
          </motion.div>

          {/* Divider */}

          <div className="product-detail-divider" />

          {/* Seller */}

          <motion.div
            className="seller-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="seller-card-header">
              <div className="seller-icon">
                <User size={18} />
              </div>

              <div>
                <span>Seller</span>
                <h3>{product.sellerInfo?.name}</h3>
              </div>
            </div>

            <div className="seller-contact-list">
              <div className="seller-contact">
                <Mail size={16} />
                <span>{product.sellerInfo?.email}</span>
              </div>

              <div className="seller-contact">
                <Phone size={16} />
                <span>{product.sellerInfo?.phone}</span>
              </div>
            </div>
          </motion.div>

          {/* CTA */}

          <motion.form
            action="/api/payment"
            method="POST"
            className="product-purchase-form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <input
              type="hidden"
              name="productPrice"
              value={product?.price}
            />

            <input
              type="hidden"
              name="productId"
              value={product?._id}
            />

            <input
              type="hidden"
              name="authorId"
              value={product?.sellerInfo?.userId}
            />

            <Button
              variant="primary"
              className="product-purchase-button"
              type="submit"
            >
              <ShoppingCart size={19} />
              ADD TO CART
            </Button>
          </motion.form>
        </motion.section>
      </motion.div>
    </motion.main>
  );
};

export default ProductDetailsPage;
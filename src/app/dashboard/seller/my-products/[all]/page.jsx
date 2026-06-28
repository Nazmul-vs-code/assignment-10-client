"use client";

import React, { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { Button, Input, Label, TextField } from '@heroui/react';
import toast from 'react-hot-toast';
import { getProductById } from '@/lib/api/products';
import { updateProduct } from '@/lib/actions/product';
import { authClient } from '@/lib/auth-client';

const EditPage = () => {
    const params = useParams();
    // Ensure you use the correct param key (e.g., 'all' or 'id')
    const id = params?.all; 
    const router = useRouter();

    const [loading, setLoading] = useState(true);
    const [updating, setUpdating] = useState(false);
    const [product, setProduct] = useState(null);

    useEffect(() => {
        if (!id) return;
        getProductById(id).then((data) => {
            setProduct(data);
            setLoading(false);
        });
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setUpdating(true);

        try {
            const { data: session } = await authClient.getSession();
            if (session?.user?.role === 'admin') {
                router.replace('/dashboard/admin/products');
                return;
            }

            // Correctly capture form data using the form's target
            const formData = new FormData(e.target);
            const data = Object.fromEntries(formData.entries());

            const updatedProduct = {
                title: data.title,
                description: data.description,
                price: Number(data.price),
                category: data.category,
                condition: data.condition,
            };

            const result = await updateProduct(id, updatedProduct);
            if (result.updated) {
                toast.success("Product updated successfully!");
                router.push('/dashboard/seller/my-products');
            } else {
                throw new Error("Update failed");
            }
        } catch (error) {
            toast.error("Failed to update product.");
        } finally {
            setUpdating(false);
        }
    };

    if (loading) return <div className="text-white p-10">Loading product details...</div>;

    return (
        <div className="p-8 bg-zinc-900 rounded-xl max-w-2xl mx-auto text-white">
            <h1 className="text-2xl font-bold mb-6">Edit: {product?.title}</h1>
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <TextField isRequired defaultValue={product?.title}>
                    <Label>Title</Label>
                    <Input name="title" />
                </TextField>
                
                <div className="grid grid-cols-2 gap-4">
                    <TextField isRequired defaultValue={product?.category}>
                        <Label>Category</Label>
                        <Input name="category" />
                    </TextField>
                    <TextField isRequired defaultValue={product?.condition}>
                        <Label>Condition</Label>
                        <Input name="condition" />
                    </TextField>
                </div>

                <TextField isRequired defaultValue={product?.description}>
                    <Label>Description</Label>
                    <Input name="description" />
                </TextField>

                <TextField isRequired defaultValue={product?.price}>
                    <Label>Price</Label>
                    <Input name="price" type="number" />
                </TextField>

                <div className="flex gap-4 mt-6">
                    <Button type="submit" color="primary" isDisabled={updating}>
                        {updating ? "Saving..." : "Save Changes"}
                    </Button>
                    <Button variant="flat" onPress={() => router.back()}>
                        Cancel
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default EditPage;
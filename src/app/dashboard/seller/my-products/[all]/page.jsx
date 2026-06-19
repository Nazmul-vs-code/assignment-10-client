'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useParams } from 'next/navigation';
import { Button, Input, Label, TextField } from '@heroui/react';
import toast from 'react-hot-toast';
import { getProductById } from '@/lib/api/products'; // Fetcher
import { updateProduct } from '@/lib/actions/product'; // Action
import { authClient } from '@/lib/auth-client';

const EditPage = () => {
    const params = useParams();
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


        const { data: session } = await authClient.getSession();
            const user = session?.user;

            // 2. Role-based Redirection
            if (user?.role === 'admin') {
                router.replace('/dashboard/admin/products');
            }
        
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        // Construct update payload (same schema as your creation form)
        const updatedProduct = {
            title: data.title,
            description: data.description,
            price: Number(data.price),
            category: data.category,
            condition: data.condition,
        };

        try {
            const result = await updateProduct(id, updatedProduct);
            if (result.updated) {
                toast.success("Product updated successfully!");
                
                router.push('/dashboard/seller/my-products'); // Redirect back
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
                <TextField name="title" isRequired defaultValue={product?.title}>
                    <Label>Title</Label>
                    <Input />
                </TextField>
                
                <div className="grid grid-cols-2 gap-4">
                    <TextField name="category" isRequired defaultValue={product?.category}>
                        <Label>Category</Label>
                        <Input />
                    </TextField>
                    <TextField name="condition" isRequired defaultValue={product?.condition}>
                        <Label>Condition</Label>
                        <Input />
                    </TextField>
                </div>

                <TextField name="description" isRequired defaultValue={product?.description}>
                    <Label>Description</Label>
                    <Input />
                </TextField>

                <TextField name="price" isRequired defaultValue={product?.price}>
                    <Label>Price</Label>
                    <Input type="number" />
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
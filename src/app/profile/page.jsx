"use client";

import React from 'react';
import { authClient } from '@/lib/auth-client';
import { Button, Input, Label, TextField, Avatar } from "@heroui/react";
import toast from 'react-hot-toast';
// import { toast } from 'react-toastify';

const UsersProfilePage = () => {
    // 1. Get session using the client hook
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;

    if (isPending) return <div className="p-10 text-center">Loading...</div>;
    if (!user) return <div className="p-10 text-center">Please log in.</div>;

    // 2. Exact onSubmit pattern from your previous project
    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const { name, phone, photo } = Object.fromEntries(formData.entries());

        try {
            await authClient.updateUser({
                name,
                photo, // Mapping your 'photo' input to the auth 'image' field
                phone
            });

            toast.success("Wow, amazing profile! :)");
            window.location.reload('/profile')
        } catch (error) {
            toast.error("Failed to update profile.");
            console.error(error);
        }
    };

    return (
        <div className="max-w-2xl mx-auto py-12 px-6">
            {/* Header: Avatar Display */}
            <div className="flex flex-col items-center mb-12">
                <Avatar 
                    name={user?.name}
                    size="lg" 
                    className="w-32 h-32 text-large mb-4 ring-4 ring-red-500/20"
                >
                    <Avatar.Image src={user?.photo} />
                </Avatar>
                <h1 className="text-2xl font-bold">{user?.name}</h1>
                <p className="text-neutral-500">{user?.email}</p>
            </div>

            {/* Profile Form Container */}
            <div className="p-8 rounded-2xl border border-neutral-100 shadow-sm">
                <h2 className="text-lg font-semibold mb-6">Edit Profile</h2>
                
                <form onSubmit={onSubmit} className="flex flex-col gap-6">
                    <TextField name="name" defaultValue={user?.name} variant="flat" className="w-full">
                        <Label>Full Name</Label>
                        <Input placeholder="Enter your full name" />
                    </TextField>

                    <TextField name="phone" defaultValue={user?.phone} type="tel" variant="flat" className="w-full">
                        <Label>Phone Number</Label>
                        <Input placeholder="Enter your phone number" />
                    </TextField>

                    <TextField name="photo" defaultValue={user?.photo} type="url" variant="flat" className="w-full">
                        <Label>Profile Photo URL</Label>
                        <Input placeholder="Paste your image URL here" />
                    </TextField>

                    <Button type="submit" color="danger" className="w-full mt-4">
                        Save Changes
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default UsersProfilePage;
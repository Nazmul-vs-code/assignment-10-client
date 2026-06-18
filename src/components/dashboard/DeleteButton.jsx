"use client";

import { Button } from "@heroui/react";
import { Trash2 } from "lucide-react";
import { deleteWishlistItem } from "@/lib/actions/wishlist";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";

export const DeleteButton = ({ productId }) => {
    const router = useRouter();

    const handleDelete = async () => {
        const { data: session } = await authClient.token();
            const res = await deleteWishlistItem(productId, session.token);
            console.log(res , ' delted res ')
            if (res.deleted) {
                toast.success("your wishlist was deleted !!")
                window.location.reload(); 
            }
    };

    return (
        <Button 
            variant="danger" 
            size="sm" 
            className="rounded-lg w-full mt-2"
            onClick={handleDelete}
        >
            <Trash2 size={16} /> Remove
        </Button>
    );
};
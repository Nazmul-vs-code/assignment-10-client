"use client"; 

import React from 'react';
import { Avatar, Button } from "@heroui/react";
import { updateUserStatus, deleteUser } from '@/lib/actions/users'; // Ensure deleteUser is imported
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { TrashBin } from '@gravity-ui/icons';

const AllUsersCard = ({ users }) => {
    const router = useRouter();

    const handleStatusUpdate = async (userId, newStatus) => {
        try {
            await updateUserStatus(userId, newStatus);
            toast.success("Status updated!!");
            router.refresh(); 
        } catch (error) {
            console.error("Failed to update status:", error);
            toast.error("Failed to update status");
        }
    };

    const handleDelete = async (userId) => {
        if (confirm("Are you sure you want to delete this user?")) {
            try {
                const res = await deleteUser(userId);
                res.success && toast.success("User deleted successfully!") 
            } catch (error) {
                console.error("Failed to delete user:", error);
                toast.error("Failed to delete user");
            }
        }
    };

    return (
        <div className="flex flex-col gap-4">
            {users?.map((user) => {
                const initials = user?.name ? user.name.substring(0, 2).toUpperCase() : "??";
                const isBlocked = user?.status === 'blocked';

                return (
                    <div 
                        key={user._id} 
                        className="flex items-center justify-between p-4 bg-content1 rounded-lg border border-default-200"
                    >
                        <div className="flex items-center gap-4">
                            <Avatar>
                                <Avatar.Image alt={user.name} src={user.photo} />
                                <Avatar.Fallback>{initials}</Avatar.Fallback>
                            </Avatar>
                            
                            <div>
                                <p className="font-semibold">{user.name}</p>
                                <p className="text-sm text-muted-foreground">{user.email}</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <span className={`px-2 py-1 text-xs rounded-full uppercase ${
                                user.role === 'admin' ? 'bg-purple-500/20 text-purple-400' : 'bg-green-500/20 text-green-400'
                            }`}>
                                {user.role}
                            </span>
                            
                            <span>
                                <Button variant={`${user?.status == 'active' ? "primary":"danger"}`} size="sm">
                                    {user?.status || 'active'}
                                </Button>
                            </span>

                            {user.role !== 'admin' && (
                                <Button 
                                    size="sm" 
                                    variant="flat" 
                                    color={isBlocked ? "success" : "danger"}
                                    onClick={() => handleStatusUpdate(user._id, isBlocked ? 'active' : 'blocked')}
                                >
                                    {isBlocked ? 'Activate' : 'Block'}
                                </Button>
                            )}

                            {/* Delete Button Implementation */}
                            {
                                user?.role != 'admin' &&
                            <Button 
                            className="hover:text-red-600" 
                            variant="ghost" 
                            onClick={() => handleDelete(user._id)}
                            >
                                <TrashBin />
                            </Button>
                            }
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default AllUsersCard;
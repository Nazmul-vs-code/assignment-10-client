"use client"; // CRITICAL: This MUST be at the top

import React from 'react';
import { Avatar, Button } from "@heroui/react";
import { updateUserStatus } from '@/lib/actions/users';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

const AllUsersCard = ({ users }) => {
    const router = useRouter();

    const handleStatusUpdate = async (userId, newStatus) => {
        try {
            await updateUserStatus(userId, newStatus);
            // Refresh the server component data
            toast.success("status updated!!")
            router.refresh(); 
        } catch (error) {
            console.error("Failed to update status:", error);
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
                                <Button variant={`${user?.status == 'active' ? "primary":"danger"}`} size="sm">{user?.status || 'active'}</Button>
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
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default AllUsersCard;
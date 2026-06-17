"use client";

import { authClient } from "@/lib/auth-client";
import {
  Button,
  Description,
  FieldError,
  Fieldset,
  Form,
  Input,
  Label,
  Surface,
  ListBox,
  Select,
  TextField,
} from "@heroui/react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import React from "react";
import { FcGoogle } from "react-icons/fc";

export default function SignUpPage() {
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());

    await authClient.signUp.email({
      ...user,
      
    });

    router.push('/');
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-xl mx-auto mt-10 p-6"
    >
      <div className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-indigo-600">
          Join ReSell Hub
        </h1>
        <p className="text-muted-foreground mt-2">Create your account to start buying and selling</p>
      </div>

      <Surface className="p-8 border shadow-lg rounded-3xl">
        <Form onSubmit={onSubmit}>
          <Fieldset className="flex flex-col gap-4">
            <Fieldset.Legend className="text-2xl font-bold">Signup</Fieldset.Legend>
            <Description className="mb-4">Enter your details to get started.</Description>
            
            <TextField isRequired name="name"><Label>Name</Label><Input placeholder="John Doe" variant="secondary" /></TextField>
            <TextField name="photo" type="url"><Label>Profile Photo URL</Label><Input placeholder="https://..." variant="secondary" /></TextField>
            <TextField isRequired name="email" type="email"><Label>Email</Label><Input placeholder="john@example.com" variant="secondary" /></TextField>
            <TextField isRequired name="phone" type="tel"><Label>Phone</Label><Input placeholder="+88017xxxxxxxx" variant="secondary" /></TextField>
            <TextField isRequired name="location"><Label>Location</Label><Input placeholder="Dhaka, Bangladesh" variant="secondary" /></TextField>
            <TextField isRequired name="password" type="password"><Label>Password</Label><Input placeholder="••••••••" variant="secondary" /></TextField>

            <Select isRequired name="role" placeholder="Select role">
              <Label>Signup As</Label>
              <Select.Trigger><Select.Value /><Select.Indicator /></Select.Trigger>
              <Select.Popover>
                <ListBox>
                  <ListBox.Item id="buyer" textValue="buyer">Buyer</ListBox.Item>
                  <ListBox.Item id="seller" textValue="seller">Seller</ListBox.Item>
                </ListBox>
              </Select.Popover>
            </Select>

            <Button type="submit" className="w-full mt-4 bg-indigo-600 hover:bg-indigo-700 text-white">
              Complete Signup
            </Button>
          </Fieldset>
          <div className="p-4 flex items-center justify-center">

          <Button variant="ghost" className={'rounded-none'} ><FcGoogle/> Login With Google</Button>
          </div>
        </Form>
      </Surface>
    </motion.div>
  );
}
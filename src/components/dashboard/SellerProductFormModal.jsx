"use client";

import { imageUpload } from "@/lib/actions/ImageUpload";
import { createProduct } from "@/lib/actions/product";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import toast from "react-hot-toast";
import { FaProductHunt } from "react-icons/fa";

export function SellerProductFormModal({ user }) {
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    
    const image = await imageUpload(data?.photo);
    const product = {
        title: data.title,
        description: data.description,
        price: Number(data.price),
        category: data.category,
        condition: data.condition,
        images: [image.url],
        status: "available",
        sellerInfo: {
            userId: user.id,
            name: user.name,
            email: user.email,
            phone: user.phone
        }
    };

    const result = await createProduct(product);
    if (result.acknowledged) {
      toast.success("Your product was posted!!!")
    }
    
    console.log(result, ' result from backend ');
  };

  return (
    <Modal>
      <Button variant="secondary"><FaProductHunt /> Create a Product</Button>
      <Modal.Backdrop>
        <Modal.Container>
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Heading>Add New Product</Modal.Heading>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form id="product-form" onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <TextField name="title" isRequired variant="secondary">
                    <Label>Title</Label>
                    <Input placeholder="Product name" />
                  </TextField>
                  
                  <div className="flex gap-4">
                    <TextField name="category" isRequired variant="secondary">
                      <Label>Category</Label>
                      <Input placeholder="Electronics" />
                    </TextField>
                    <TextField name="condition" isRequired variant="secondary">
                      <Label>Condition</Label>
                      <Input placeholder="Good" />
                    </TextField>
                  </div>

                  <TextField name="description" isRequired variant="secondary">
                    <Label>Description</Label>
                    <Input placeholder="Brief product description" />
                  </TextField>

                  <TextField name="price" isRequired variant="secondary">
                    <Label>Price</Label>
                    <Input type="number" placeholder="0.00" />
                  </TextField>

                  <TextField isRequired variant="secondary">
                    <Label>Product Photo</Label>
                    <input type="file" name="photo" className="w-full text-sm border rounded-md p-2" />
                  </TextField>
                  
                  <Button slot='close' type="submit">Save Product</Button>
                  <Button slot='close' variant="danger" type="cancel">cancel</Button>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
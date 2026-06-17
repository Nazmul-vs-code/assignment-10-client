"use client";

import { imageUpload } from "@/lib/actions/ImageUpload";
import { createProduct } from "@/lib/actions/product";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { FaProductHunt } from "react-icons/fa";

export function SellerProductFormModal() {
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    
    // Log the file object separately as it's not a standard string
    const image = await imageUpload(data?.photo)
    const imageUrl = image.url

    
    const product =  {
            ...data,
            imageUrl
        }
    const result = await createProduct(product)
    console.log(result , ' result from backend ')
  };

  return (
    <Modal>
      <Button variant="secondary"><FaProductHunt /> Create a Product</Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Heading>Add New Product</Modal.Heading>
              <p className="mt-1.5 text-sm text-muted">
                Fill in the details below to list your product.
              </p>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form id="product-form" onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <TextField className="w-full" name="title" isRequired variant="secondary">
                    <Label>Title</Label>
                    <Input placeholder="Product name" />
                  </TextField>
                  
                  <TextField className="w-full" name="description" isRequired variant="secondary">
                    <Label>Description</Label>
                    <Input placeholder="Brief product description" />
                  </TextField>

                  <div className="flex gap-4">
                    <TextField className="w-full" name="price" isRequired variant="secondary">
                      <Label>Price</Label>
                      <Input type="number" placeholder="0.00" />
                    </TextField>
                    <TextField className="w-full" name="quantity" isRequired variant="secondary">
                      <Label>Quantity</Label>
                      <Input type="number" placeholder="0" />
                    </TextField>
                  </div>

                  <TextField className="w-full" variant="secondary">
                    <Label>Product Photo</Label>
                    <input 
    type="file" 
    name="photo" 
    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
  />
                  </TextField>
              <Button type="submit" slot="close">Save Product</Button>
                </form>
              </Surface>
            </Modal.Body>
            <Modal.Footer>
              <Button slot="close" variant="secondary">Cancel</Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
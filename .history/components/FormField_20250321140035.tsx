import React from "react";
import {
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage
} from "./ui/form";
import { Input } from "./ui/input";
import { Controller } from "react-hook-form";

const FormField = ({ control, name, label, placeholder, type = "text" }) => {
  return (
    <div>
      <Controller
        name="name"
        control={control}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Username</FormLabel>
            <FormControl>
              <Input placeholder="shadcn" {...field} />
            </FormControl>
            <FormDescription>This is your public display name.</FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default FormField;

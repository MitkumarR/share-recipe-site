"use client";

import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandInput,
  CommandItem,
  CommandList,
  CommandEmpty,
} from "@/components/ui/command";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { addIngredient, removeIngredient } from "@/redux/slices/filterSlice";

const ALL_INGREDIENTS = [
  "Tomato",
  "Cheese",
  "Basil",
  "Onion",
  "Garlic",
  "Chili",
  "Potato",
  "Coriander",
  "Capsicum",
  "Butter",
  "Paneer",
  "Ginger",
];

export default function IngredientSelector() {
  const dispatch = useDispatch();
  const selected = useSelector((state) => state.filter.ingredients);

  const [open, setOpen] = useState(false);

  const addin = (ing) => {
    dispatch(addIngredient(ing));
  };

  const removein = (ing) => {
    dispatch(removeIngredient(ing));
  };

  return (
    <div className="w-full max-w-md">
      <label className="block mb-2 text-yellow-500">Ingredients</label>

      {/* Selected Ingredient Tags */}
      <div className="flex flex-wrap gap-2 mb-2">
        {selected.map((item) => (
          <Badge key={item} className="bg-yellow-100 text-yellow-800">
            {item}
            <X
              className="ml-1 h-3 w-3 cursor-pointer"
              onClick={() => removein(item)}
            />
          </Badge>
        ))}
      </div>

      {/* Combobox Trigger */}
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between bg-white text-left"
          >
            {selected.length ? "Add More Ingredients" : "Select Ingredients..."}
          </Button>
        </PopoverTrigger>

        <PopoverContent className="w-full max-w-md p-0">
          <Command>
            <CommandInput placeholder="Search ingredients..." />
            <CommandEmpty>No ingredients found.</CommandEmpty>
            <CommandList>
              {ALL_INGREDIENTS.filter((ing) => !selected.includes(ing)).map(
                (ingredient) => (
                  <CommandItem
                    key={ingredient}
                    onSelect={() => addin(ingredient)}
                  >
                    {ingredient}
                  </CommandItem>
                )
              )}
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}

"use client";

import React from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, X } from "lucide-react";
import IngredientsSelector from "./selectIngred";
import { useSelector, useDispatch } from "react-redux";
import {
  setRegion,
  setSession,
  setType,
  setCategory,
  clearAllFilters,
  removeIngredient,
} from "@/redux/slices/filterSlice";

export default function Header() {
  const dispatch = useDispatch();
  const { region, session, ingredients, type, category } = useSelector(
    (state) => state.filter
  );

  const allSelected = [
    ...(region ? [region] : []),
    ...(session ? [session] : []),
    ...(type ? [type] : []),
    ...(category ? [category] : []),
  ];

  return (
    <div className="w-full flex flex-col items-center justify-center gap-2 itemmax-w-6xl">
      <div className="w-full  flex items-center justify-center gap-2">
        {/* Filter Dialog */}
        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              className="rounded-full bg-yellow-500 text-[#1E1E1E] mx-2"
            >
              Filter
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-3xl">
            <DialogHeader>
              <DialogTitle className="text-yellow-500 text-2xl">
                Filter Recipes
              </DialogTitle>
              <DialogDescription className="text-gray-500">
                Use filters to find the perfect dish for your needs.
              </DialogDescription>
            </DialogHeader>

            <div className="flex flex-col md:flex-row gap-6 mt-4">
              {/* Filter Fields */}
              <div className="w-full md:w-3/4 grid gap-6">
                {/* Region */}
                <div>
                  <Label className="text-yellow-500">Region</Label>
                  <select
                    className="mt-2 w-full border rounded-md p-2"
                    onChange={(e) => dispatch(setRegion(e.target.value))}
                    value={region}
                  >
                    <option value="">Select Region</option>
                    <option>All</option>
                    <option>Indian</option>
                    <option>Chinese</option>
                    <option>Italian</option>
                    <option>Mexican</option>
                  </select>
                </div>

                {/* Session */}
                <div>
                  <Label className="text-yellow-500">Session</Label>
                  <select
                    className="mt-2 w-full border rounded-md p-2"
                    onChange={(e) => dispatch(setSession(e.target.value))}
                    value={session}
                  >
                    <option value="">Select Session</option>
                    <option>All</option>
                    <option>Breakfast</option>
                    <option>Lunch</option>
                    <option>Dinner</option>
                    <option>Snacks</option>
                  </select>
                </div>

                {/* Ingredients */}
                <IngredientsSelector />

                {/* Type */}
                <div>
                  <Label className="text-yellow-500">Type</Label>
                  <div className="flex gap-4 mt-2">
                    <Button
                      variant="outline"
                      className={`border-yellow-500 ${
                        type === "Veg"
                          ? "bg-yellow-500 text-white"
                          : "text-yellow-500"
                      }`}
                      onClick={() => dispatch(setType("Veg"))}
                    >
                      Veg
                    </Button>
                    <Button
                      variant="outline"
                      className={`border-yellow-500 ${
                        type === "Non-Veg"
                          ? "bg-yellow-500 text-white"
                          : "text-yellow-500"
                      }`}
                      onClick={() => dispatch(setType("Non-Veg"))}
                    >
                      Jain
                    </Button>
                    <Button
                      variant="outline"
                      className={`border-yellow-500 ${
                        type === "Non-Veg"
                          ? "bg-yellow-500 text-white"
                          : "text-yellow-500"
                      }`}
                      onClick={() => dispatch(setType("Non-Veg"))}
                    >
                      Non-Veg
                    </Button>
                  </div>
                </div>

                {/* Category */}
                <div>
                  <Label className="text-yellow-500">Category</Label>
                  <select
                    className="mt-2 w-full border rounded-md p-2"
                    onChange={(e) => dispatch(setCategory(e.target.value))}
                    value={category}
                  >
                    <option value="">Select Category</option>
                    <option>All</option>
                    <option>Fast Food</option>
                    <option>Traditional</option>
                    <option>Healthy</option>
                    <option>Dessert</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Footer Buttons */}
            <DialogFooter className="mt-6 flex justify-between flex-row">
              <Button
                variant="outline"
                className="text-yellow-500 border-yellow-500 hover:bg-yellow-500 hover:text-white"
                onClick={() => dispatch(clearAllFilters())}
              >
                Clear
              </Button>
              <DialogClose asChild>
                <Button
                  type="submit"
                  className="bg-yellow-500 text-[#1E1E1E] hover:bg-yellow-600"
                >
                  Apply Filters
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Search Input */}
        <div className="flex w-full items-center sm:max-w-sm gap-2 px-2 ">

          <Input
            type="search"
            placeholder="Search"
            className="w-full rounded-full border border-yellow-500 focus:ring-yellow-500"
          />
          <Button
            type="submit"
            variant="outline"
            className="rounded-full border border-yellow-500"
          >
            <Search className="text-yellow-500 w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Selected Filters Display */}
      <div className="flex gap-2 flex-wrap mt-4 text-sm">
        {/* Region */}
        {region && (
          <span className="flex items-center gap-1 bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full">
            <strong className="text-yellow-700">Region:</strong> {region}
          </span>
        )}

        {/* Session */}
        {session && (
          <span className="flex items-center gap-1 bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full">
            <strong className="text-yellow-700">Session:</strong> {session}
          </span>
        )}

        {/* Type */}
        {type && (
          <span className="flex items-center gap-1 bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full">
            <strong className="text-yellow-700">Type:</strong> {type}
          </span>
        )}

        {/* Category */}
        {category && (
          <span className="flex items-center gap-1 bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full">
            <strong className="text-yellow-700">Category:</strong> {category}
          </span>
        )}

        {/* Ingredients */}
        {ingredients.length > 0 && (
          <span className="flex items-center gap-1 bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full">
            <strong className="text-yellow-700">Ingredients:</strong>
            {ingredients.map((item, idx) => (
              <span key={idx} className="flex items-center gap-1">
                {item}
                {idx !== ingredients.length - 1 && ","}
              </span>
            ))}
          </span>
        )}
      </div>
    </div>
  );
}

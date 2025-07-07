"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/recipes/header";
import Link from "next/link"; 
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Heart, User } from "lucide-react";

export default function RecipePage() {
  const router = useRouter();
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`http://localhost:8000/api/recipes/recipes/`);
        if (!res.ok) throw new Error("Server error");
        const data = await res.json();
        setRecipes(data);
      } catch (err) {
        setError("Failed to fetch recipes.");
        console.error("Failed to fetch recipes:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchRecipes();
  }, []);

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-red-500 text-lg">
          <p>{error}</p>
          <p className="mt-2">Please try again later or contact support.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-4 py-8">
      <Header />
      {loading ? (
        <div className="flex items-center justify-center min-h-screen">
          <p className="text-gray-500 text-lg">Loading recipes...</p>
        </div>
      ) : recipes.length ? (
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {recipes.map((recipe) => (
            <Link key={recipe.id} href={`/recipes/${recipe.id}`}>
              <Card
                key={recipe.id}
                className="transition-all hover:scale-[1.02] hover:shadow-xl"
              >
                <div className="h-48 overflow-hidden rounded-t-lg">
                  <img
                    src={recipe.image || "/home-image.jpg"}
                    alt={recipe.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <CardHeader>
                  <CardTitle className="text-xl font-semibold">
                    {recipe.title}
                  </CardTitle>
                  <CardDescription>{recipe.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex justify-between items-center text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{recipe.chef}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Heart className="w-4 h-4 text-red-500" />
                      <span>{recipe.likes}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center min-h-screen">
          <p className="text-gray-500 text-lg">No recipes found.</p>
        </div>
      )}
    </div>
  );
}

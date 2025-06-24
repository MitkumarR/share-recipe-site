import Header from "@/components/recipes/header";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Heart, User } from "lucide-react";

const recipes = [
  {
    id: 1,
    title: "Spicy Masala Dosa",
    description: "A crisp rice crepe filled with spicy potato filling.",
    image:
      "https://images.unsplash.com/photo-1604909052775-07b8dfe4fa78?auto=format&fit=crop&w=800&q=80",
    likes: 230,
    chef: "Chef Anjali",
  },
  {
    id: 2,
    title: "Pasta Arrabiata",
    description: "Classic Italian pasta tossed in a spicy tomato sauce.",
    image:
      "https://images.unsplash.com/photo-1603079841858-4001d44b393b?auto=format&fit=crop&w=800&q=80",
    likes: 170,
    chef: "Chef Marco",
  },
  {
    id: 3,
    title: "Butter Chicken",
    description: "Creamy and rich chicken curry loved across the globe.",
    image:
      "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80",
    likes: 310,
    chef: "Chef Rohan",
  },
  {
    id: 4,
    title: "Sushi Platter",
    description: "Delicious assortment of fresh sushi and sashimi rolls.",
    image:
      "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=800&q=80",
    likes: 205,
    chef: "Chef Yuki",
  },
  {
    id: 5,
    title: "Avocado Toast",
    description: "Toasted sourdough topped with smashed avocado and eggs.",
    image:
      "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80",
    likes: 95,
    chef: "Chef Emma",
  },
  {
    id: 6,
    title: "Chole Bhature",
    description: "Fried bread served with spicy chickpea curry.",
    image:
      "https://images.unsplash.com/photo-1610621241764-b2c3d0ee53a0?auto=format&fit=crop&w=800&q=80",
    likes: 450,
    chef: "Chef Manish",
  },
  {
    id: 7,
    title: "Falafel Wrap",
    description: "Middle Eastern wrap stuffed with falafel and hummus.",
    image:
      "https://images.unsplash.com/photo-1613767381859-8c73e077bf9d?auto=format&fit=crop&w=800&q=80",
    likes: 125,
    chef: "Chef Layla",
  },
  {
    id: 8,
    title: "Margherita Pizza",
    description: "Wood-fired pizza with fresh tomato, basil, and mozzarella.",
    image:
      "https://images.unsplash.com/photo-1601924582975-4ee6d02c69a2?auto=format&fit=crop&w=800&q=80",
    likes: 370,
    chef: "Chef Luca",
  },
  {
    id: 9,
    title: "Miso Ramen",
    description: "Japanese miso broth with noodles, egg, and pork slices.",
    image:
      "https://images.unsplash.com/photo-1603898037225-5d53b9f14b1d?auto=format&fit=crop&w=800&q=80",
    likes: 220,
    chef: "Chef Hana",
  },
  {
    id: 10,
    title: "Paneer Tikka",
    description: "Grilled paneer cubes marinated in spices and yogurt.",
    image:
      "https://images.unsplash.com/photo-1630406748676-bcf4b7aa3982?auto=format&fit=crop&w=800&q=80",
    likes: 290,
    chef: "Chef Priya",
  },
  {
    id: 11,
    title: "Greek Salad",
    description: "Fresh salad with feta cheese, olives, and cucumbers.",
    image:
      "https://images.unsplash.com/photo-1551189014-8e029b8f7a4b?auto=format&fit=crop&w=800&q=80",
    likes: 130,
    chef: "Chef Eleni",
  },
  {
    id: 12,
    title: "Fish Tacos",
    description: "Grilled fish served in soft tacos with salsa and crema.",
    image:
      "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80",
    likes: 185,
    chef: "Chef Carlos",
  },
  {
    id: 13,
    title: "Vegan Buddha Bowl",
    description: "Healthy bowl of grains, legumes, and roasted veggies.",
    image:
      "https://images.unsplash.com/photo-1605477004630-c8be78b82d8a?auto=format&fit=crop&w=800&q=80",
    likes: 160,
    chef: "Chef Nora",
  },
  {
    id: 14,
    title: "Shahi Paneer",
    description: "Rich and creamy cottage cheese curry with Indian spices.",
    image:
      "https://images.unsplash.com/photo-1608471579844-d7347b6a056d?auto=format&fit=crop&w=800&q=80",
    likes: 310,
    chef: "Chef Aarav",
  },
  {
    id: 15,
    title: "Chocolate Lava Cake",
    description: "Warm chocolate cake with a molten center.",
    image:
      "https://images.unsplash.com/photo-1559628232-420f7b175059?auto=format&fit=crop&w=800&q=80",
    likes: 270,
    chef: "Chef Maya",
  },
];


export default function RecipePage() {
  return (
    <div className="min-h-screen px-4 py-8">
      <Header />

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {recipes.map((recipe) => (
          <Card
            key={recipe.id}
            className="transition-all hover:scale-[1.02] hover:shadow-xl"
          >
            <div className="h-48 overflow-hidden rounded-t-lg">
              <img
                src={recipe.image}
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

            <CardFooter>
              <p className="text-xs text-gray-400">Click for full recipe</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

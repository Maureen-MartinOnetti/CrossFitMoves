"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function CardImage(props) {
  const { category = "", description = "", image = "" } = props;

  return (
    <Card className="w-64">
      <div>
        <CardHeader>
          <CardTitle>{category}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
      </div>
      <CardContent>
        <img src={image} alt={category} className="object-cover h-40 w-full" />
      </CardContent>
    </Card>
  );
}

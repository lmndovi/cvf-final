import { type SchemaTypeDefinition } from "sanity";

import category from "./schemas/category";
import harvestCrop from "./schemas/harvestCrops";
import crop from "./schemas/shopCrops";
import carouselImages from "./schemas/carouselImages";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [crop, harvestCrop, category, carouselImages],
};

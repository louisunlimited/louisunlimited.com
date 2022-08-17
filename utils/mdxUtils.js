// This file contains utility functions for mdx, including file paths
import fs from "fs";
import path from "path";

// Getting the posts directory
export const POST_PATH = path.join(process.cwd(), "posts");

// Getting individual mdx post files in posts directory
export const postFilePath = fs
  .readdirSync(POST_PATH)
  .filter((file) => file.endsWith(".mdx"));

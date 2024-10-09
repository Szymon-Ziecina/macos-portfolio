"use server";

import { GithubUserType } from "@/types";
import axios from "axios";

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

export async function fetchGithubUser(
  username: string
): Promise<GithubUserType | null> {
  try {
    const response = await axios.get<GithubUserType>(
      `https://api.github.com/users/${username}`,
      {
        headers: {
          Authorization: `token ${GITHUB_TOKEN}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(`Axios error: ${error.message}`);
    } else {
      console.error(`Unexpected error: ${error}`);
    }
    return null;
  }
}
"use server";

interface VimeoProps {
  user_id: string;
  folder_id: string;
}

export async function getVimeoVideos({ user_id, folder_id }: VimeoProps) {
  const access_token = process.env.VIMEO_ACCESS_TOKEN;
  try {
    const res = await fetch(
      `	https://api.vimeo.com/users/${user_id}/projects/${folder_id}/videos`,
      {
        method: "GET",
        cache: "no-store",
        headers: {
          Authorization: `Bearer ${access_token}`,
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}
  
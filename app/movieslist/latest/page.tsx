import { fetchLatestMovies, fetchSimilairMovies } from "@/app/actions/fetchMovies";
import SimilairMovies from "@/app/ui/similairmovies";
import SlickSlider from "@/app/ui/slickslider";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function LatestPage() {
  const latestMovies = await fetchLatestMovies();
  const similarMovies = await fetchSimilairMovies("1012201");
  console.log(similarMovies);

  return (
    <>
        <h2 className="pl-5">
            Trending
        </h2>

        <div className="pl-5">
            <SlickSlider movies={latestMovies} />
        </div>

        <div className="pl-5">
            {/* <SimilairMovies similairMovies={similarMovies} /> */}
        </div>
    </>
  );
}
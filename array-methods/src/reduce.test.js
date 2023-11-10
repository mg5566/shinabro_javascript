import { describe, it, expect } from "vitest";
import { shows } from "./data";

describe("reduce method", () => {
  it("calculates the total of an array", () => {
    const numbers = [1, 2, 3, 4, 5];

    // TODO: do something here
    // const callback = (sum, number) => sum + number;
    // const initalValue = 0;
    // const sum = numbers.reduce(callback, initalValue);
    const sum = numbers.reduce((sum, number) => sum + number, 0);
    expect(sum).toBe(15);
  });

  it("groups by genre", () => {
    // TODO: do something with `shows` here
    const groupedShows = shows.reduce((result, show) => {
      if (!result[show.genre]) {
        result[show.genre] = [];
      }
      result[show.genre].push(show.title);

      return result;
    }, {});

    expect(groupedShows).toEqual({
      Comedy: ["Don't Look Up"],
      Drama: ["Stranger Things", "Our Blues", "Inventing Anna"],
      Mistery: ["Dirk Gently's Holistic Detective Agency"],
      Mystery: ["Little Women"],
    });
  });

  it("groups by key (2)", () => {
    // TODO: do something with `shows` here
    // const group = shows.reduce((result, show) => {
    //   if (!result[show.genre]) {
    //     result[show.genre] = [];
    //   }
    //   result[show.genre].push(show.title);

    //   return result;
    // }, {});
    // const groupedShows = Object.entries(group).map((genre) => {
    //   return {
    //     genre: genre[0],
    //     titles: genre[1],
    //   };
    // });

    const groupedShows = shows.reduce((result, show) => {
      const index = result.findIndex(
        (resultShow) => resultShow.genre === show.genre
      );
      if (index === -1) {
        result.push({
          genre: show.genre,
          titles: [show.title],
        });
      } else {
        result[index].titles.push(show.title);
      }
      return result;
    }, []);

    expect(groupedShows).toEqual([
      {
        genre: "Drama",
        titles: ["Stranger Things", "Our Blues", "Inventing Anna"],
      },
      {
        genre: "Mystery",
        titles: ["Little Women"],
      },
      {
        genre: "Comedy",
        titles: ["Don't Look Up"],
      },
      {
        genre: "Mistery",
        titles: ["Dirk Gently's Holistic Detective Agency"],
      },
    ]);
  });

  it("flattens array", () => {
    const nestedArray = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];

    // TODO: do something here
    const flatArray = nestedArray.reduce((result, arr) => {
      result.push(...arr);
      return result;
      // return [...result, ...arr];
    }, []);
    expect(flatArray).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it("extracts writer names", () => {
    // TODO: do something with `shows` here
    const writerNames = shows.reduce((result, show) => {
      result.push(...show.writers);

      return result;
    }, []);

    expect(writerNames).toEqual([
      "Matt Duffer",
      "Ross Duffer",
      "Jessie Nickson-Lopez",
      "Kate Trefry",
      "Justin Doble",
      "Alison Tatlock",
      "Paul Dichter",
      "Jessica Mecklenburg",
      "Seo-Gyeong Jeong",
      "Hee-kyung Noh",
      "Shonda Rhimes",
      "Carolyn Ingber",
      "Jessica Pressler",
      "Nicholas Nardini",
      "Adam McKay",
      "Max Landis",
      "Douglas Adams",
    ]);
  });
});

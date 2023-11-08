import { describe, it, expect } from "vitest";
import { posts } from "./data";

describe("filter method - simple", () => {
  it("gets positive numbers", () => {
    const numbers = [1, -2, 3, -4, 5];

    // TODO: do something here
    // const positiveNumbers = [];
    const positiveNumbers = numbers.filter((n) => n > 0);
    expect(positiveNumbers).toEqual([1, 3, 5]);
  });

  it("gets employees in Sales department", () => {
    const employees = [
      { name: "John", age: 30, department: "Sales" },
      { name: "Jane", age: 35, department: "Development" },
      { name: "Jim", age: 40, department: "Sales" },
    ];

    // TODO: do something here
    // const salesEmployees = [];
    const salesEmployees = employees.filter((e) => e.department === "Sales");
    expect(salesEmployees).toEqual([
      { name: "John", age: 30, department: "Sales" },
      { name: "Jim", age: 40, department: "Sales" },
    ]);
  });

  it("gets employees over 35 in Marketing department", () => {
    const employees = [
      { name: "John", age: 30, department: "Sales" },
      { name: "Jane", age: 35, department: "Development" },
      { name: "Jim", age: 40, department: "Marketing" },
    ];

    // TODO: do something here
    // const salesEmployeesOver35 = [];
    const salesEmployeesOver35 = employees.filter(
      (e) => e.age > 35 && e.department === "Marketing"
    );
    expect(salesEmployeesOver35).toEqual([
      { name: "Jim", age: 40, department: "Marketing" },
    ]);
  });

  it("gets employees in Sales or Development department", () => {
    const employees = [
      { name: "John", age: 30, department: "Sales" },
      { name: "Jane", age: 35, department: "Development" },
      { name: "Jim", age: 40, department: "Marketing" },
    ];

    const targetDepartments = ["Sales", "Development"];

    // TODO: do something here
    // const salesOrDevEmployees = [];
    /*
    const salesOrDevEmployees = employees.filter(
      (e) => e.department === "Sales" || e.department === "Development"
    );
    */
    /*
    const salesOrDevEmployees = employees.filter((e) => {
      targetDepartments.includes(e.department);
    });
    */
    const targetDepartmentsSet = new Set(targetDepartments);
    const salesOrDevEmployees = employees.filter((e) => {
      return targetDepartmentsSet.has(e.department);
    });
    expect(salesOrDevEmployees).toEqual([
      { name: "John", age: 30, department: "Sales" },
      { name: "Jane", age: 35, department: "Development" },
    ]);
  });
});

describe("filter method - real world", () => {
  it("gets posts from this year", () => {
    // TODO: do something here
    /*
    const postsThisYear = posts.filter((post) =>
      post.meta.created_at.startsWith("2023")
    );
    */
    const postsThisYear = posts.filter((post) => {
      return new Date(post.meta.created_at).getFullYear() === 2023;
    });
    expect(postsThisYear.length).toBe(10);
  });

  it('gets posts with "culture" tag', () => {
    // TODO: do something here
    // const postsWithCultureTag = [];
    const postsWithCultureTag = posts.filter((post) =>
      post.meta.tags.includes("culture")
    );
    expect(postsWithCultureTag.length).toBe(16);
  });

  it("gets tweets posted after 10pm", () => {
    // hint:
    // new Date('2023-02-03T21:10:00.000Z').toLocaleString('fr-FR')
    //
    // TODO: do something here
    // const tweetsPostedAfter10pm = [];
    const tweetsPostedAfter10pm = posts.filter((post) => {
      // const frenchTimeStamp = new Date(post.meta.created_at).toLocaleString(
      //   "fr-FR"
      // );
      // return new Date(frenchTimeStamp).getHours() >= 22;
      const frenchTimeStamp = new Intl.DateTimeFormat("fr-FR", {
        dateStyle: "short",
        timeStyle: "long",
        timeZone: "Europe/Paris",
      }).format(new Date());
      console.log(frenchTimeStamp.split(" ")[1]);
      return frenchTimeStamp.split(" ")[1].split(":")[0] >= 22;
    });
    expect(tweetsPostedAfter10pm.length).toBe(5);
  });
});

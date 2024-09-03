import { SidebarLink } from "@/types";

export const dummyQuestions = [
  {
    _id: 1,
    title:
      "Best practices for data fetching in a Next.js application with Server-Side Rendering (SSR)?",
    tags: [
      { _id: 1, name: "Next.js" },
      { _id: 2, name: "Server-Side Rendering" },
      { _id: 3, name: "Data Fetching" },
    ],
    author: [
      {
        _id: 101,
        name: "John Doe",
        picture: "https://example.com/john-doe.jpg",
      },
    ],
    upvotes: 10,
    views: 100,
    answers: [
      { id: 1001, content: "Sample answer 1" },
      { id: 1002, content: "Sample answer 2" },
    ],
    createdAt: new Date("2024-03-15T10:30:00Z"),
  },
  {
    _id: 2,
    title: "Is it only me or the font is bolder than necessary?",
    tags: [
      { _id: 4, name: "CSS" },
      { _id: 5, name: "Typography" },
      { _id: 6, name: "UI Design" },
    ],
    author: [
      {
        _id: 102,
        name: "Jane Smith",
        picture: "https://example.com/jane-smith.jpg",
      },
    ],
    upvotes: 5,
    views: 75,
    answers: [
      { id: 2001, content: "It's not just you, the font does look bold." },
    ],
    createdAt: new Date("2024-03-16T14:45:00Z"),
  },
  {
    _id: 3,
    title: "Redux Toolkit Not Updating State as Expected",
    tags: [
      { _id: 7, name: "Redux" },
      { _id: 8, name: "Redux Toolkit" },
      { _id: 9, name: "State Management" },
    ],
    author: [
      {
        _id: 103,
        name: "Bob Johnson",
        picture: "https://example.com/bob-johnson.jpg",
      },
    ],
    upvotes: 15,
    views: 200,
    answers: [
      { id: 3001, content: "Check your reducers for any mutations." },
      {
        id: 3002,
        content: "Make sure you're using the correct action creators.",
      },
      {
        id: 3003,
        content: "Verify that your selectors are working correctly.",
      },
    ],
    createdAt: new Date("2024-03-17T09:15:00Z"),
  },
];

export const dummyData = [
  {
    _id: 1,
    title:
      "Best practices for data fetching in a Next.js application with Server-Side Rendering (SSR)?",
  },
  {
    _id: 2,
    title: "Is it only me or the font is bolder than necessary?",
  },
  {
    _id: 3,
    title: "Redux Toolkit Not Updating State as Expected",
  },
  {
    _id: 4,
    title: "Async/Await Function Not Handling Errors Properly",
  },
];

export const dummyTags = [
  {
    _id: 1,
    name: "Next.js",
    numberOfQuestions: 10,
  },
  {
    _id: 2,
    name: "React",
    numberOfQuestions: 30,
  },
  {
    _id: 3,
    name: "JavaScript",
    numberOfQuestions: 20,
  },
  {
    _id: 4,
    name: "TypeScript",
    numberOfQuestions: 15,
  },
];

export const themes = [
  { value: "light", label: "Light", icon: "/assets/icons/sun.svg" },
  { value: "dark", label: "Dark", icon: "/assets/icons/moon.svg" },
  { value: "system", label: "System", icon: "/assets/icons/computer.svg" },
];

export const sidebarLinks: SidebarLink[] = [
  {
    imgURL: "/assets/icons/home.svg",
    route: "/",
    label: "Home",
  },
  {
    imgURL: "/assets/icons/users.svg",
    route: "/community",
    label: "Community",
  },
  {
    imgURL: "/assets/icons/star.svg",
    route: "/collection",
    label: "Collections",
  },
  {
    imgURL: "/assets/icons/suitcase.svg",
    route: "/jobs",
    label: "Find Jobs",
  },
  {
    imgURL: "/assets/icons/tag.svg",
    route: "/tags",
    label: "Tags",
  },
  {
    imgURL: "/assets/icons/user.svg",
    route: "/profile",
    label: "Profile",
  },
  {
    imgURL: "/assets/icons/question.svg",
    route: "/ask-question",
    label: "Ask a question",
  },
];

export const BADGE_CRITERIA = {
  QUESTION_COUNT: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  ANSWER_COUNT: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  QUESTION_UPVOTES: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  ANSWER_UPVOTES: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  TOTAL_VIEWS: {
    BRONZE: 1000,
    SILVER: 10000,
    GOLD: 100000,
  },
};

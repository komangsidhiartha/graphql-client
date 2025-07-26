import type { GetUsersQuery } from "./graphql/generated";

export type User = NonNullable<GetUsersQuery["users"]>[number];
export type Message = NonNullable<User["messages"]>[number];
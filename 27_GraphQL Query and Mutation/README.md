## uery with apollo client.

1. import gql aand useQuery then write your query, or you can copy from hasura console instead.
2. Get initial data by doing query on the server, call useQuery in top of your code.
3. Consume data in your jsx code, note that in first request data is null so need use optional chaining to avoid error.

## Mutation with Apollo CLient

1. import useMutation hooks from apollo client and define mutation

## Mutation Insert Data with Apollo Client

1. invoke useMutation using array destruction define mutation handler(insertTodo) and use it
2. Call insertTodo with variables

## Mutation Update Data with Apollo CLient

1. Define update query
2. Create mutation handler for update todo
3. Call update Query

## Mutation Delete Data with Apollo CLient

1. Define delete query
2. Create mutation handler for delete todo
3. Call delete Query

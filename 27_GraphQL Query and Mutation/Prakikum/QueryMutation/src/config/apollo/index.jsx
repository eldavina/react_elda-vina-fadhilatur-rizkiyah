import { InMemoryCache, ApolloClient, HttpLink } from "@apollo/client";

const apolloClient = new ApolloClient({
	link: new HttpLink({
		uri: "https://flowing-caiman-23.hasura.app/v1/graphql",
		headers: {
			"x-hasura-admin-secret":
				"1f4q6ItRk1RcK83S34UM1gM6moaBwzewfEfFtpfGVUZ221jJPMQKvpnKcCipD3Qs",
		},
	}),
	cache: new InMemoryCache(),
});
export default apolloClient;

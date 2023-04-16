import { InMemoryCache, ApolloClient, HttpLink, split } from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";

const wsLink = new GraphQLWsLink(
	createClient({
		url: "wss://flowing-caiman-23.hasura.app/v1/graphql",
		connectionParams: {
			headers: {
				"x-hasura-admin-secret":
					"1f4q6ItRk1RcK83S34UM1gM6moaBwzewfEfFtpfGVUZ221jJPMQKvpnKcCipD3Qs",
			},
		},
	})
);

const httpLink = new HttpLink({
	uri: "https://flowing-caiman-23.hasura.app/v1/graphql",
	headers: {
		"x-hasura-admin-secret":
			"1f4q6ItRk1RcK83S34UM1gM6moaBwzewfEfFtpfGVUZ221jJPMQKvpnKcCipD3Qs",
	},
});

const splitLink = split(
	({ query }) => {
		const definition = getMainDefinition(query);
		return (
			definition.kind === "OperationDefinition" &&
			definition.operation === "subscription"
		);
	},
	wsLink,
	httpLink
);

const apolloClient = new ApolloClient({
	link: splitLink,
	cache: new InMemoryCache(),
});

export default apolloClient;

// const apolloClient = new ApolloClient({
// 	link: new HttpLink({
// 		uri: "https://flowing-caiman-23.hasura.app/v1/graphql",
// 		headers: {
// 			"x-hasura-admin-secret":
// 				"1f4q6ItRk1RcK83S34UM1gM6moaBwzewfEfFtpfGVUZ221jJPMQKvpnKcCipD3Qs",
// 		},
// 	}),
// 	cache: new InMemoryCache(),
// });
// export default apolloClient;

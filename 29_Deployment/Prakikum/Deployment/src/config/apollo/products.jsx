import { gql } from "@apollo/client";

export const getProductsQuery = gql`
	subscription getProductsQuery {
		products {
			no
			id
			name
			category
			freshness
			description
			price
		}
	}
`;

export const deleteProductsByIdMutation = gql`
	mutation deleteProducts($no: Int!) {
		delete_products_by_pk(no: $no) {
			no
		}
	}
`;

export const insertProductsMutation = gql`
	mutation insertProductsMutation(
		$name: String!
		$category: String!
		$freshness: String!
		$description: String!
		$price: Int!
	) {
		insert_products_one(
			object: {
				name: $name
				category: $category
				freshness: $freshness
				description: $description
				price: $price
			}
		) {
			name
		}
	}
`;

export const getDetailProductsByIdQuery = gql`
	query getDetailProductsByIdQuery($id: uuid!) {
		products(where: { id: { _eq: $id } }) {
			no
			id
			name
			category
			freshness
			description
			price
		}
	}
`;

export const updateProductsMutationbyIdMutation = gql`
	mutation updateProductsMutationbyIdMutation(
		$id: uuid!
		$name: String!
		$category: String!
		$freshness: String!
		$description: String!
		$price: Int!
	) {
		update_products(
			where: { id: { _eq: $id } }
			_set: {
				name: $name
				category: $category
				freshness: $freshness
				description: $description
				price: $price
			}
		) {
			affected_rows
		}
	}
`;

import { gql } from "@apollo/client";

export const getListsQuery = gql`
	subscription getListsQuery {
		lists {
			uuid
			id
			nama
			tipeno
			lahir
			wafat
		}
	}
`;
// no
// id
// name
// category
// freshness
// description
// price
export const deleteListsByIdMutation = gql`
	mutation deleteLists($id: Int!) {
		delete_lists_by_pk(id: $id) {
			id
		}
	}
`;

export const insertListsMutation = gql`
	mutation insertListsMutation(
		$nama: String!
		$tipeno: String!
		$lahir: String!
		$wafat: String!
	) {
		insert_lists_one(
			object: { nama: $nama, tipeno: $tipeno, lahir: $lahir, wafat: $wafat }
		) {
			nama
		}
	}
`;

export const getDetailListsByIdQuery = gql`
	query getDetailListsByIdQuery($uuid: uuid!) {
		lists(where: { uuid: { _eq: $uuid } }) {
			uuid
			id
			nama
			tipeno
			lahir
			wafat
		}
	}
`;

export const updateListsMutationbyIdMutation = gql`
	mutation updateListsMutationbyIdMutation(
		$uuid: uuid!
		$nama: String!
		$tipeno: String!
		$lahir: String!
		$wafat: String!
	) {
		update_lists(
			where: { uuid: { _eq: $uuid } }
			_set: { nama: $nama, tipeno: $tipeno, lahir: $lahir, wafat: $wafat }
		) {
			affected_rows
		}
	}
`;
